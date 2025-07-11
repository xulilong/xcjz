# 使用 Node.js 18 作为基础镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 设置 npm 配置
COPY .npmrc ./
ENV NPM_CONFIG_REGISTRY=https://registry.npmjs.org/
ENV NPM_CONFIG_STRICT_SSL=false
ENV NPM_CONFIG_ALWAYS_AUTH=false

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install --no-audit --no-fund

# 复制源代码
COPY . .

# 编译 TypeScript
RUN npm run build

# 暴露端口
EXPOSE 3000

# 启动服务
CMD ["npm", "run", "serve"] 