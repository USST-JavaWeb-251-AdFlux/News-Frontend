# News-Frontend

这是一个基于 Nuxt 4 构建的静态新闻网站前端项目。项目使用静态站点生成 (SSG) 模式，旨在部署到 Cloudflare Pages 等静态托管平台。

## 🚀 技术栈

- **框架**: [Nuxt 4](https://nuxt.com)
- **UI 库**: [Vue 3](https://vuejs.org)
- **语言**: TypeScript
- **包管理**: pnpm (推荐)
- **样式**: 原生 CSS

## ✨ 功能特性

- **静态站点生成 (SSG)**: 预渲染所有页面，提供极佳的加载速度和 SEO 优化。
- **动态路由**: 支持文章详情页 (`/article/:id`) 和分类页 (`/category/:slug`) 的自动生成。
- **分页功能**: 首页新闻列表支持分页显示。
- **广告集成**: 集成了 AdFlux 广告验证和展示组件。
- **数据驱动**: 内容由本地 JSON 数据驱动，易于维护和更新。

## 📂 项目结构

```
News-Frontend/
├── app/
│   ├── assets/          # 静态资源 (CSS, 图片等)
│   ├── components/      # Vue 组件 (如广告占位符)
│   ├── layouts/         # 页面布局
│   ├── pages/           # 页面路由
│   ├── types/           # TypeScript 类型定义
│   └── utils/           # 工具函数
├── data/                # 数据源 (JSON 文件)
│   ├── categories.json  # 新闻分类
│   └── news.json        # 新闻列表
├── public/              # 公共静态文件
├── nuxt.config.ts       # Nuxt 配置文件
└── package.json         # 项目依赖和脚本
```

## 🛠️ 安装与运行

确保你的环境已安装 Node.js。

1. **安装依赖**

   ```bash
   pnpm install
   ```
2. **启动开发服务器**

   ```bash
   pnpm dev
   ```

   访问 `http://localhost:3000` 查看效果。
3. **构建生产版本**

   ```bash
   pnpm build
   ```
4. **生成静态站点**

   ```bash
   pnpm generate
   ```

   生成的静态文件将位于 `.output/public` 目录。
5. **预览生产构建**

   ```bash
   pnpm preview
   ```

## 📦 部署

本项目配置了 `cloudflare-pages-static` 预设，非常适合部署到 Cloudflare Pages。

在 `nuxt.config.ts` 中，`nitro.prerender.routes` 被配置为根据 `data/` 目录下的 JSON 文件自动预渲染所有文章和分类页面。

## 📝 数据管理

新闻内容和分类信息存储在 `data/` 目录下：

- **`news.json`**: 包含新闻文章列表，每篇文章包含标题、摘要、内容、分类、日期和封面图等信息。
- **`categories.json`**: 定义新闻分类及其对应的路由 slug。

修改这些 JSON 文件后，重新运行 `pnpm generate` 即可更新站点内容。
