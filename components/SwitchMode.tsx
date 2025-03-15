"use client";

import updateusermode from "@/app/actions/updateusermode";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Switch() {
  const [checked, setChecked] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Get initial mode from cookie on client side
    const mode = document.cookie
      .split("; ")
      .find((row) => row.startsWith("mode="))
      ?.split("=")[1];

    setChecked(mode === "true" ? true : false);
  }, []);

  const handleToggle = async () => {
    const newChecked = !checked;
    setChecked(newChecked);
    await updateusermode(newChecked, pathname);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleToggle();
      }}
    >
      <label
        className={`flex items-center cursor-pointer gap-2 transition-all duration-300`}
      >
        <span className={cn(!checked && "text-mygreen dark:text-myred")}>
          dev
        </span>
        <button type="submit" className="relative">
          <div
            className={`block w-8 h-2 rounded-full transition-colors duration-300 ${cn(
              "bg-gray-300",
              checked && "bg-mygreen dark:bg-myred"
            )}`}
          />
          <div
            className={`absolute -top-[2px] bg-myblack dark:bg-white w-3 h-3 rounded-full transition-transform duration-300 ${cn(
              checked && "transform translate-x-6"
            )}`}
          />
        </button>
        <span className={cn(checked && "text-mygreen dark:text-myred")}>
          reader
        </span>
      </label>
    </form>
  );
}
