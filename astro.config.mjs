import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "http://localhost:4321/",
  compressHTML: true,
  devToolbar: {
    enabled: false,
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    build: {
      cssMinify: true,
      minify: "esbuild",
    },
    esbuild: {
      drop: ["console", "debugger"],
    },
  },
  integrations: [
    starlight({
      title: "Froggy",
      favicon: "/favicon.svg",
      logo: {
        light: "./src/assets/icons/froggy-blk.svg",
        dark: "./src/assets/icons/froggy-wht.svg",
        replacesTitle: true,
      },
      locales: {
        root: {
          label: "繁體中文",
          lang: "zh-TW",
        },
      },
      social: [
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/U3DW4cNkMd",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/MyGoFeatSuch/froggy-docs",
        },
      ],
      sidebar: [
        {
          label: "快速開始",
          items: [{ label: "簡介與邀請", slug: "getting-started" }],
        },

        {
          label: "操作指南",
          items: [
            { label: "主頁查询", slug: "guides/profile" },
            { label: "伺服器管理", slug: "guides/admin" },
            { label: "娛樂功能", slug: "guides/entertain" },
            { label: "音樂功能", slug: "guides/music" },
          ],
        },
        {
          label: "參考資料",
          items: [{ label: "指令總覽", slug: "reference/commands" }],
        },
      ],
      components: {
        PageSidebar: "./src/components/starlight/PageSidebar.astro",
        Head: "./src/components/starlight/Head.astro",
      },
      editLink: {
        baseUrl: "https://github.com/MyGoFeatSuch/froggy-docs/edit/main/",
      },
      customCss: ["./src/styles/theme.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
