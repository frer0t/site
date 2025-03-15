"use client";

import { ReactNode } from "react";
import { toast as sonnerToast } from "sonner";

export default function toast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom((id) => (
    <Toast id={id} description={toast.description} icon={toast.icon} />
  ));
}

function Toast(props: ToastProps) {
  const { description, icon } = props;

  return (
    <div className="flex items-center gap-3 rounded-lg border border-mygreen dark:border-myred border-dashed bg-white/50 dark:bg-myblack/50 px-4 py-3 shadow-lg text-red-500 ">
      {icon}
      <p className="flex-1 text-sm font-medium ">{description}</p>
    </div>
  );
}

interface ToastProps {
  id: string | number;
  icon: ReactNode;
  description: string;
}
