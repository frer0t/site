import * as runtime from "react/jsx-runtime";
import type { MDXComponents } from "mdx/types";

// Velite compiles MDX to a function body (no import/export statements), so
// it's executed with `new Function` and handed the jsx runtime directly —
// same approach as next-mdx-remote/Contentlayer.
function useMDXComponent(code: string) {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
}

const MDXContent = ({
  code,
  components,
}: {
  code: string;
  components?: MDXComponents;
}) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};

export default MDXContent;
