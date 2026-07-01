import type { MDXComponents } from "mdx/types";
import CodeBlock from "./CodeBlock";
import BlogImage from "./BlogImage";
import Gallery from "./Gallery";

export const blogMdxComponents: MDXComponents = {
  p: ({ children }) => (
    <p className="mb-6.5 text-[17px] leading-[1.75] text-myblack dark:text-white/90">
      {children}
    </p>
  ),
  h2: ({ id, children }) => (
    <h2
      id={id}
      className="mt-5 mb-5 scroll-mt-24 text-[26px] font-extrabold text-myblack dark:text-white"
    >
      {children}
    </h2>
  ),
  h3: ({ id, children }) => (
    <h3
      id={id}
      className="mt-4 mb-4 scroll-mt-24 text-xl font-bold text-myblack dark:text-white"
    >
      {children}
    </h3>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-7 border-l-[3px] border-mygreen pl-5.5 text-[17px] leading-[1.7] text-metal-500 italic dark:border-myred dark:text-metal-400">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => <ul className="mb-6.5">{children}</ul>,
  li: ({ children }) => (
    <li className="mb-2.5 flex gap-3 text-[17px] leading-[1.6] text-myblack dark:text-white/90">
      <span className="shrink-0 text-mygreen dark:text-myred">–</span>
      <span>{children}</span>
    </li>
  ),
  pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
  BlogImage,
  Gallery,
};
