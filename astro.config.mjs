// @ts-check
import { defineConfig } from 'astro/config';

/**
 * ★ 部署地址：会影响 sitemap.xml、canonical 与 OG 卡片。
 *
 * 当前按「组织站」配置，部署到实验室的 GitHub 组织 XI-Lab-XDU：
 *   · 组织站： https://xi-lab-xdu.github.io        ← 当前配置
 *     仓库名必须正好是 XI-Lab-XDU.github.io，站点才挂在根路径，不需要 base
 *   · 项目站： https://xi-lab-xdu.github.io/homepage
 *     除了 base: '/homepage'，还得改 localizePath() 与所有静态资源引用 ——
 *     Astro 只会给自己打包的 _astro/ 加前缀，写死的 /img/... 不会加
 *   · 个人账户（早先部署过）： https://ckk038.github.io
 *   · 自有域名： https://lab.example.edu.cn
 *
 * 改这里之后，别忘了同步 public/robots.txt 里的 Sitemap 地址，
 * 然后跑 node _tools/check-deploy.mjs 自检（它会核对这两处是否一致）。
 */
export default defineConfig({
  site: 'https://xi-lab-xdu.github.io',
  build: {
    // 生成 /team/index.html 这种目录式结构，GitHub Pages 访问 /team 时不会 404
    format: 'directory',
  },
  compressHTML: true,
});