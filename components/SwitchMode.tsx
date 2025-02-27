"use client";
import { useState } from "react";

export default function Switch({
  onChange,
}: {
  onChange?: (checked: boolean) => void;
}) {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <label
      className={`flex items-center cursor-pointer gap-2 ${
        checked
          ? "text-mygreen dark:text-myred"
          : "text-myblack dark:text-white"
      } transition-all duration-300`}
    >
      <span>dev</span>
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={handleChange}
        />
        <div
          className={`block w-8 h-2 rounded-full transition-colors duration-300 ${
            checked ? "bg-mygreen dark:bg-myred" : "bg-gray-300"
          }`}
        />
        <div
          className={`absolute -top-[2px] bg-myblack dark:bg-white w-3 h-3 rounded-full transition-transform duration-300 ${
            checked ? "transform translate-x-6" : ""
          }`}
        />
      </div>
      <span>reader</span>
    </label>
  );
}
