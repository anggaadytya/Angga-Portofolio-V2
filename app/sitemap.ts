import { PROJECTS } from "@/constant/projects";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = "https://angga-project.vercel.app";

  return [
    {
      url: domain,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${domain}/dashboard`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${domain}/project`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${domain}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${domain}/sharing`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.3,
    },
    ...PROJECTS.map((project) => ({
      url: `${domain}/project/${project.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as const,
      priority: 1,
    })),
  ];
}
