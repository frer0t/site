import Link from "next/link";
import { ReactNode } from "react";
import { CiLink } from "react-icons/ci";

const Href = ({ to, children }: { to: string; children: ReactNode }) => {
  return (
    <Link
      className="inline-flex hover:underline text-mygreen dark:text-myred font-bold "
      href={to}
      target="_blank"
    >
      {children}
      <CiLink />
    </Link>
  );
};

export default Href;
