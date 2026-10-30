import { getAllProjects } from "@/lib/projects";
import { getAllPosts } from "@/lib/posts";
import { baseurl } from "@/utils/staticurls";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects().map((project) => ({
    url: `${baseurl}/portfolio/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${baseurl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseurl,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${baseurl}/logo-dark.svg`,
        `${baseurl}/logo-light.svg`,
        `${baseurl}/me-dark.jpg`,
        `${baseurl}/me-light.jpg`,
      ],
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
    ...projects,
    ...posts,
  ];
}
