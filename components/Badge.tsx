import { cn } from "@/utils/cn"; // Make sure you have this utility
import { ElementType, ReactNode } from "react";

type BadgeColor =
  | "gray"
  | "gold"
  | "bronze"
  | "brown"
  | "yellow"
  | "amber"
  | "orange"
  | "tomato"
  | "red"
  | "ruby"
  | "crimson"
  | "pink"
  | "plum"
  | "purple"
  | "violet"
  | "iris"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "jade"
  | "green"
  | "grass"
  | "lime"
  | "mint"
  | "sky";

interface BadgeProps {
  color?: BadgeColor;
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export default function Badge({
  color = "gray",
  children,
  as: Component = "span",
  className,
}: BadgeProps) {
  const baseClasses =
    "w-fit inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset";

  const colorClasses: Record<BadgeColor, string> = {
    gray: cn(
      "bg-gray-50 text-gray-600 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20"
    ),
    gold: cn(
      "bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-400 dark:ring-yellow-400/20"
    ),
    bronze: cn(
      "bg-orange-50 text-orange-700 ring-orange-600/20 dark:bg-orange-400/10 dark:text-orange-400 dark:ring-orange-400/20"
    ),
    brown: cn(
      "bg-amber-50 text-amber-800 ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400 dark:ring-amber-400/20"
    ),
    yellow: cn(
      "bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-400 dark:ring-yellow-400/20"
    ),
    amber: cn(
      "bg-amber-50 text-amber-800 ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400 dark:ring-amber-400/20"
    ),
    orange: cn(
      "bg-orange-50 text-orange-700 ring-orange-600/20 dark:bg-orange-400/10 dark:text-orange-400 dark:ring-orange-400/20"
    ),
    tomato: cn(
      "bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20"
    ),
    red: cn(
      "bg-red-50 text-red-700 ring-red-600/10 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20"
    ),
    ruby: cn(
      "bg-red-50 text-red-800 ring-red-600/20 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20"
    ),
    crimson: cn(
      "bg-pink-50 text-pink-700 ring-pink-600/20 dark:bg-pink-400/10 dark:text-pink-400 dark:ring-pink-400/20"
    ),
    pink: cn(
      "bg-pink-50 text-pink-700 ring-pink-600/10 dark:bg-pink-400/10 dark:text-pink-400 dark:ring-pink-400/20"
    ),
    plum: cn(
      "bg-purple-50 text-purple-700 ring-purple-600/20 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/20"
    ),
    purple: cn(
      "bg-purple-50 text-purple-700 ring-purple-600/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/20"
    ),
    violet: cn(
      "bg-violet-50 text-violet-700 ring-violet-600/10 dark:bg-violet-400/10 dark:text-violet-400 dark:ring-violet-400/20"
    ),
    iris: cn(
      "bg-indigo-50 text-indigo-700 ring-indigo-600/20 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/20"
    ),
    indigo: cn(
      "bg-indigo-50 text-indigo-700 ring-indigo-600/10 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/20"
    ),
    blue: cn(
      "bg-blue-50 text-blue-700 ring-blue-600/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/20"
    ),
    cyan: cn(
      "bg-cyan-50 text-cyan-700 ring-cyan-600/10 dark:bg-cyan-400/10 dark:text-cyan-400 dark:ring-cyan-400/20"
    ),
    teal: cn(
      "bg-teal-50 text-teal-700 ring-teal-600/10 dark:bg-teal-400/10 dark:text-teal-400 dark:ring-teal-400/20"
    ),
    jade: cn(
      "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/20"
    ),
    green: cn(
      "bg-green-50 text-green-700 ring-green-600/10 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/20"
    ),
    grass: cn(
      "bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/20"
    ),
    lime: cn(
      "bg-lime-50 text-lime-700 ring-lime-600/10 dark:bg-lime-400/10 dark:text-lime-400 dark:ring-lime-400/20"
    ),
    mint: cn(
      "bg-emerald-50 text-emerald-700 ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/20"
    ),
    sky: cn(
      "bg-sky-50 text-sky-700 ring-sky-600/10 dark:bg-sky-400/10 dark:text-sky-400 dark:ring-sky-400/20"
    ),
  };

  return (
    <Component className={cn(baseClasses, colorClasses[color], className)}>
      {children}
    </Component>
  );
}
