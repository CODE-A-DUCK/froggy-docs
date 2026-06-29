import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";

// Get all Starlight documentation pages
const docs = await getCollection("docs");

// Build a dic of all pages
const pages = Object.fromEntries(
  docs.map((doc) => [
    doc.id || "index",
    {
      title: doc.data.title,
      slug: doc.id || "index",
    },
  ]),
);

// Add the root home page
pages["index"] = {
  title: "FROGGY",
  slug: "",
};

const { getStaticPaths, GET } = await OGImageRoute({
  param: "route",
  pages: pages,
  getImageOptions: (pathName, page: { title: string; slug: string }) => {
    return {
      title: page.title,
      description: page.slug === "" ? "/" : `/${page.slug}`,
      bgImage: {
        path: "./src/assets/images/og-bg-glass.png",
      },
      border: { color: [30, 110, 244], width: 16, side: "inline-start" },
      padding: 100,
      font: {
        title: {
          size: 40,
          families: ["Noto Sans TC"],
          weight: "Normal",
          color: [200, 200, 200],
        },
        description: {
          size: 96,
          families: ["Noto Sans TC"],
          weight: "Bold",
          color: [255, 255, 255],
        },
      },
      fonts: ["./src/assets/fonts/NotoSansTC.ttf"],
      logo: {
        path: "./src/assets/icons/froggy-wht.svg",
        size: [280],
      },
    };
  },
});

export { getStaticPaths, GET };
