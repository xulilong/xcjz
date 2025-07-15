const express = require('express');
const path = require('path');
const session = require('express-session');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// 配置 session
app.use(session({
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// 解析 JSON 请求体
app.use(express.json());

// 静态文件服务
app.use(express.static('public'));
app.use('/src', express.static('src'));

// 存储验证码和微信登录状态
const verificationCodes = new Map();
const wechatLoginStates = new Map();

// 路由处理
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/kindergarten', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/pages/kindergarten.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/pages/login.html'));
});

// 手机验证码登录相关 API
app.post('/api/send-verify-code', (req, res) => {
    const { phone } = req.body;

    // 验证手机号格式
    if (!/^1[3-9]\d{9}$/.test(phone)) {
        return res.status(400).json({
            success: false,
            message: '无效的手机号'
        });
    }

    // 生成6位随机验证码
    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    // 存储验证码（5分钟有效期）
    verificationCodes.set(phone, {
        code: verifyCode,
        timestamp: Date.now()
    });

    // TODO: 集成短信服务发送验证码
    console.log(`向 ${phone} 发送验证码: ${verifyCode}`);

    res.json({
        success: true,
        message: '验证码已发送'
    });
});

app.post('/api/login', (req, res) => {
    const { phone, verifyCode, loginType } = req.body;

    if (loginType === 'phone') {
        // 验证手机号格式
        if (!/^1[3-9]\d{9}$/.test(phone)) {
            return res.status(400).json({
                success: false,
                message: '无效的手机号'
            });
        }

        // 获取存储的验证码
        const storedVerification = verificationCodes.get(phone);
        
        // 验证码已过期（5分钟）或不存在
        if (!storedVerification || Date.now() - storedVerification.timestamp > 5 * 60 * 1000) {
            return res.status(400).json({
                success: false,
                message: '验证码已过期，请重新获取'
            });
        }

        // 验证码不匹配
        if (storedVerification.code !== verifyCode) {
            return res.status(400).json({
                success: false,
                message: '验证码错误'
            });
        }

        // 验证成功，删除验证码
        verificationCodes.delete(phone);

        // 设置登录状态
        req.session.user = {
            phone,
            loginType: 'phone',
            loginTime: Date.now()
        };

        res.json({
            success: true,
            message: '登录成功',
            redirectUrl: '/'
        });
    } else if (loginType === 'wechat') {
        // TODO: 处理微信登录
        res.status(400).json({
            success: false,
            message: '微信登录功能开发中'
        });
    } else {
        res.status(400).json({
            success: false,
            message: '不支持的登录类型'
        });
    }
});

// 启动服务器
app.listen(port, '0.0.0.0', () => {
    console.log(`服务器运行在端口 ${port}`);
}); 