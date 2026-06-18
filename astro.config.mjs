// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Froggy 文檔",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/MyGoFeatSuch/froggy-docs",
        },
      ],
      sidebar: [
        {
          label: "快速開始",
          items: [
            { label: "介紹", slug: "getting-started/intro" },
            { label: "邀請機器人", slug: "getting-started/invite" },
          ],
        },
        {
          label: "指令參考",
          items: [
            { label: "指令總覽", slug: "reference/commands" },
            { label: "音樂播放", slug: "reference/music" },
            { label: "主頁查詢", slug: "reference/profile" },
            { label: "娛樂類", slug: "reference/entertain" },
            { label: "管理/版主類", slug: "reference/admin" },
            { label: "工具類", slug: "reference/tools" },

          ],
        },
      ],
      customCss: ["./src/styles/theme.css"],
    }),
  ],
});
