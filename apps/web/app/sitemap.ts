import fs from "node:fs";
import type { MetadataRoute } from "next";

const appFolders = fs.readdirSync("app", { withFileTypes: true });
const pages = appFolders
  .filter((file) => file.isDirectory())
  .filter((folder) => !folder.name.startsWith("_"))
  .filter((folder) => !folder.name.startsWith("("))
  .map((folder) => folder.name);

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://ocarina.dev";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => [
  {
    url: baseUrl,
    lastModified: new Date(),
  },
  ...pages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
  })),
];

export default sitemap;
