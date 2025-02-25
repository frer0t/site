"use client";
import { cn } from "@/utils/cn";
import { HTMLAttributes, forwardRef } from "react";
import skeletonTheme from "./Theme";

const SkeletonLine = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const theme = skeletonTheme;
    return (
      <div {...props} ref={ref} className={cn(theme.line, className)}></div>
    );
  }
);

SkeletonLine.displayName = "SkeletonLine";

export { SkeletonLine };
