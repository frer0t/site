"use client";

import CopyToClipBoard from "@/components/CopyToClipBoard";

const CopyCodeButton = ({ code }: { code: string }) => (
  <CopyToClipBoard
    text={code}
    title="Copy code"
    className="min-h-0 max-w-none text-[#8b93a1] hover:text-white"
    contentClassName="gap-0"
    iconClassName="text-sm"
    successColor="text-emerald-400"
  />
);

export default CopyCodeButton;
