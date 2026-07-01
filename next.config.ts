import pkg from "@/package.json";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import gitInfo from "./utils/gitInfo";

const isDev = process.argv.includes("dev");

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  env: {
    COMMIT_HASH: gitInfo.commit_hash,
    VERSION: pkg.version,
    NAME: pkg.name,
    COMMIT_DATE: gitInfo.date,
  },
};
const withMDX = createMDX({});

// Guard against re-running in multiple Turbopack/webpack worker processes.
const globalWithVelite = globalThis as unknown as { __veliteStarted?: boolean };

export default async function config(): Promise<NextConfig> {
  if (!globalWithVelite.__veliteStarted) {
    globalWithVelite.__veliteStarted = true;
    const { build } = await import("velite");
    await build({ watch: isDev, clean: !isDev });
  }
  return withMDX(nextConfig);
}
