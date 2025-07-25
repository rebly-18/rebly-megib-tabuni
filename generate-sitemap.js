import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

// URL dasar
const baseUrl = "https://tabuni-dev.vercel.app";

// Daftar route (update sesuai menu kamu)
const routes = ["/", "/projects", "/about", "/contact"];

async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname: baseUrl });

  routes.forEach((route) => {
    sitemapStream.write({ url: route, changefreq: "weekly", priority: route === "/" ? 1.0 : 0.8 });
  });

  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream).then((data) => data.toString());

  // Simpan ke public folder agar bisa diakses langsung
  writeFileSync("./public/sitemap.xml", sitemap, "utf8");
  console.log("✅ Sitemap generated successfully!");
}

generateSitemap();
