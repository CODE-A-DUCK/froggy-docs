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
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
      customCss: ["./src/styles/theme.css"],
    }),
  ],
});
