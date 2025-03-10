import {baseurl} from "@/utils/staticurls";
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseurl,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${baseurl}/og.png`],
    },
    {
      url: `${baseurl}/portfolio`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseurl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
