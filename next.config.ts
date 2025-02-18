import pkg from "@/package.json";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import gitInfo from "./utils/gitInfo";
const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  env: {
    COMMIT_HASH: gitInfo.commit_hash,
    VERSION: pkg.version,
    NAME: pkg.name,
    COMMIT_DATE: gitInfo.date,
  },
};
const withMDX = createMDX({});
export default withMDX(nextConfig);
