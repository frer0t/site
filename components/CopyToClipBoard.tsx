"use client";
import ICopyToClipboard from "@/types/copytoclipboard";
import { cn } from "@/utils/cn";
import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { TbCopyCheck } from "react-icons/tb";

const CopyToClipboard: React.FC<ICopyToClipboard> = ({
  text,
  children,
  className,
  iconClassName,
  contentClassName,
  successDuration = 2000,
  successIcon = <TbCopyCheck />,
  copyIcon = <FiCopy />,
  successColor = "text-green-500",
  ...buttonProps
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), successDuration);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "text-wrap w-fit max-w-[36rem] relative overflow-x-scroll py-4 px-4 rounded-lg inline-flex items-center gap-2 min-h-12 ",
        isCopied ? successColor : "text-myblack dark:text-white",
        "transition-colors duration-300",
        className
      )}
      title="Copy to clipboard"
      aria-label={isCopied ? "Copied to clipboard" : "Copy to clipboard"}
      type="button"
      {...buttonProps}
    >
      <div
        className={cn("flex-grow flex items-center gap-2", contentClassName)}
      >
        {children}
        <span className={cn("text-lg flex-shrink-0", iconClassName)}>
          {isCopied ? successIcon : copyIcon}
        </span>
      </div>
    </button>
  );
};

export default CopyToClipboard;
