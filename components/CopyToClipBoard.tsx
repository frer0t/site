"use client";
import { cn } from "@/utils/cn";
import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { TbCopyCheck } from "react-icons/tb";
interface CopyToClipboardProps {
  text: string;
  children?: React.ReactNode;
  className?: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  text,
  children,
  className,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const basestyles = `w-fit max-w-[36rem] relative overflow-x-scroll py-4 pl-4 bg-slate-500 rounded-lg inline-flex items-center gap-2 min-h-12  dark:bg-gray-800  ${
    isCopied ? "text-green-500" : "text-white dark:text-gray-200"
  } transition-colors duration-300`;
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(basestyles, className)}
      title="Copy to clipboard"
    >
      {children}
      <span className="flex items-center bg-slate-500 dark:bg-gray-800 justify-center text-lg h-full px-4 sticky right-0 flex-shrink-0 ">
        <span>{isCopied ? <TbCopyCheck /> : <FiCopy />}</span>
      </span>
    </button>
  );
};

export default CopyToClipboard;
