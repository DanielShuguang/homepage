# 第一阶段：构建阶段
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN npm i pnpm -g

RUN pnpm install

COPY . .

CMD ["pnpm", "start"]

# 第二阶段：生产阶段
FROM node:20 AS production

# 设置工作目录
WORKDIR /app

# 从构建阶段复制构建结果和依赖
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# 暴露端口
EXPOSE 3000

# 启动命令（生产模式）
CMD ["pnpm", "start"]

# 第三阶段：开发阶段
FROM node:20 AS development

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN npm i pnpm -g

# 安装依赖
RUN pnpm install

# 复制项目文件
COPY . .

# 暴露端口
EXPOSE 3000

# 启动命令（开发模式）
CMD ["pnpm", "dev"]