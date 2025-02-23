import { ReactNode } from "react";

const HighlightText = ({ children }: { children: ReactNode }) => {
  return <span className="font-semibold dark:text-white">{children}</span>;
};

export default HighlightText;
