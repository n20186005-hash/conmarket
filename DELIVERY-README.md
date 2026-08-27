# Chợ Cồn · Con Market Guide

此压缩包包含可用于继续开发或部署的完整网站交付物，不包含可由 `pnpm install` 根据锁文件恢复的 `node_modules` 目录。

| 目录或文件 | 内容 |
| --- | --- |
| `src/` | Astro 页面、布局、组件和全局样式源码。 |
| `public/` | 网站图标、Web App Manifest 与供网页引用的真实照片。 |
| `assets/real-photos/` | 所有收集到的原始真实市场照片，含当前站点使用图片与补充图片。 |
| `assets/brand-art/` | 站点标志与版画风格原创视觉资源。 |
| `dist/` | 已构建的生产静态文件，可由 Cloudflare Workers Assets 托管。 |
| `package.json`、`pnpm-lock.yaml` | 已锁定版本的依赖与安装锁文件。 |
| `astro.config.mjs`、`wrangler.jsonc`、`.node-version` | Astro、Cloudflare Workers 和 Node.js 部署配置。 |
| `ideas.md`、`research-notes.md` | 设计方向与实现/调研记录。 |

## 本地使用

使用 Node.js `22.13.0` 和 pnpm `10.4.1`。在项目根目录执行 `corepack pnpm install --frozen-lockfile`，随后执行 `pnpm check` 与 `pnpm build`。如需本地预览，可执行 `pnpm dev`。

## 域名配置

站点域名只通过环境变量 `PUBLIC_SITE_URL` 配置。例如，部署时设置 `PUBLIC_SITE_URL=https://your-domain.tld`。未设置该变量时，网站仍可构建，但不生成 canonical、绝对 Open Graph URL 或 sitemap。

## 说明

网站为独立、非营利的信息指南。实际到访前，请通过官方渠道复核摊位营业时间、交通、停车及公共设施等可能变化的信息。
