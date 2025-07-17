import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Korrect - Building AI the right way",
    short_name: "Korrect",
    description:
      "Korrect builds aligned AI systems that remain safe as they grow powerful. We prioritize alignment over capability, transparency over efficiency, and humanity's future over the AI race.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon?size=32",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon?size=192",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon?size=512",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon?size=180",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple-touch-icon",
      },
    ],
    categories: ["education", "productivity", "technology"],
    orientation: "portrait-primary",
    dir: "ltr",
    lang: "en",
    prefer_related_applications: false,
    scope: "/",
    shortcuts: [
      {
        name: "Robin",
        short_name: "Robin",
        description: "Aligned AI for fintech",
        url: "/robin",
        icons: [{ src: "/icon?size=96", sizes: "96x96" }],
      },
      {
        name: "Labs",
        short_name: "Labs",
        description: "AI alignment research",
        url: "/labs",
        icons: [{ src: "/icon?size=96", sizes: "96x96" }],
      },
      {
        name: "Founders",
        short_name: "Founders",
        description: "Community of responsible AI builders",
        url: "/founders",
        icons: [{ src: "/icon?size=96", sizes: "96x96" }],
      },
    ],
  };
}
