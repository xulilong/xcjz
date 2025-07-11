# 西城家长 - 教育资源平台

西城家长是一个专注于北京西城区教育资源的信息平台，为家长提供幼儿园、小学、中学等教育阶段的全方位信息和服务支持。

## 功能特点

- 幼儿园名录查询和筛选
- 2025年入园攻略
- 教育资源导航
- 家长社区互动
- 移动端适配

## 技术栈

- Node.js
- Express.js
- EJS 模板引擎
- Font Awesome 图标
- 响应式设计

## 项目结构

```
xcjz/
├── app.js              # 应用入口文件
├── package.json        # 项目依赖配置
├── public/            # 静态资源目录
│   ├── css/          # 样式文件
│   ├── js/           # JavaScript文件
│   └── images/       # 图片资源
├── routes/           # 路由文件
│   └── index.js      # 主路由
├── views/            # 视图模板
│   ├── partials/     # 公共模板部分
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs     # 首页
│   ├── kindergarten.ejs  # 幼儿园页面
│   └── guide.ejs     # 入园攻略
└── README.md         # 项目说明文档
```

## 安装和运行

1. 克隆项目
```bash
git clone https://github.com/yourusername/xcjz.git
cd xcjz
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 访问网站
打开浏览器访问 http://localhost:3000

## 生产环境部署

1. 设置环境变量
```bash
export NODE_ENV=production
export PORT=3000
export SESSION_SECRET=your-secret-key
```

2. 构建和启动
```bash
npm start
```

## 开发指南

- 所有页面都使用 EJS 模板引擎
- 公共组件（导航栏、页脚等）放在 views/partials 目录
- 静态资源（CSS、JavaScript、图片）放在 public 目录
- 新增页面时需要在 routes/index.js 中添加路由

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 许可证

ISC License 