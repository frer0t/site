import { highlight } from "sugar-high";
import { isValidElement, ReactNode } from "react";
import CopyCodeButton from "./CopyCodeButton";

function extractCode(children: ReactNode) {
  if (!isValidElement<{ className?: string; children?: ReactNode }>(children)) {
    return { code: String(children ?? ""), filename: "code" };
  }
  const className = children.props.className ?? "";
  const raw = className.replace(/^language-/, "");
  const [lang, filename] = raw.split(":");
  const code = String(children.props.children ?? "").replace(/\n$/, "");
  return { code, filename: filename || lang || "code" };
}

const CodeBlock = ({ children }: { children: ReactNode }) => {
  const { code, filename } = extractCode(children);
  const html = highlight(code);

  return (
    <div className="my-7 overflow-hidden rounded-2xl border border-[#1c2330] bg-[#0d1117]">
      <div className="flex items-center justify-between border-b border-[#1c2330] px-4.5 py-2.5">
        <span className="font-mono text-xs text-[#8b93a1]">{filename}</span>
        <CopyCodeButton code={code} />
      </div>
      <pre className="overflow-x-auto p-4.5 font-mono text-[13.5px] leading-relaxed text-[#e6e6e6]">
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
};

export default CodeBlock;
