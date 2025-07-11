import express from 'express';
import path from 'path';
import kindergartenRouter from './pages/kindergarten';
import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// 微信登录状态存储
const wechatLoginStates = new Map();

// 解析 JSON 请求体
app.use(express.json());

// 静态文件服务
app.use(express.static(path.join(__dirname, 'public')));

// 路由
app.use('/kindergarten', kindergartenRouter);

// 微信登录相关 API
app.get('/api/wechat-qrcode', async (req: express.Request, res: express.Response) => {
    try {
        // 云托管环境中的微信登录处理
        const container = process.env.CONTAINER_NAME || '';
        const serviceUrl = process.env.SERVICE_URL || '';
        
        // 生成唯一的状态码
        const state = Math.random().toString(36).substring(2);
        
        // 使用云托管服务URL
        const callbackUrl = `${serviceUrl}/api/wechat-callback`;
        
        // 在云托管环境中，可以使用微信开放平台网页授权
        const qrcodeUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?` +
            `appid=${process.env.WX_APPID || ''}&` +
            `redirect_uri=${encodeURIComponent(callbackUrl)}&` +
            `response_type=code&` +
            `scope=snsapi_userinfo&` +
            `state=${state}#wechat_redirect`;

        // 存储登录状态
        wechatLoginStates.set(state, {
            timestamp: Date.now(),
            status: 'pending'
        });

        res.json({
            success: true,
            qrcode: qrcodeUrl,
            state: state,
            env: {
                isCloud: true,
                container,
                serviceUrl
            }
        });
    } catch (error) {
        console.error('生成微信授权链接失败:', error);
        res.status(500).json({
            success: false,
            message: '生成授权链接失败，请稍后重试'
        });
    }
});

// 微信回调处理
app.get('/api/wechat-callback', async (req: express.Request, res: express.Response) => {
    const { code, state } = req.query;
    
    if (!code || !state) {
        return res.status(400).json({
            success: false,
            message: '无效的请求参数'
        });
    }

    try {
        // 在云托管环境中，可以直接使用云调用能力
        // 这里先返回成功，实际项目中需要处理用户信息和登录状态
        const loginState = wechatLoginStates.get(state as string);
        
        if (!loginState) {
            throw new Error('登录状态已失效');
        }

        // 更新登录状态
        wechatLoginStates.set(state as string, {
            ...loginState,
            status: 'success',
            code: code
        });

        // 重定向到前端页面
        res.redirect('/?login=success');
    } catch (error) {
        console.error('处理微信回调失败:', error);
        res.redirect('/?login=failed');
    }
});

// 主页
app.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Running in ${process.env.NODE_ENV || 'development'} mode`);
    if (process.env.CONTAINER_NAME) {
        console.log(`Container: ${process.env.CONTAINER_NAME}`);
    }
}); 