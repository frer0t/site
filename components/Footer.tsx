"use client";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
function Footer() {
  const commitDate = new Date(process.env.COMMIT_DATE!);
  const [currentYear, setCurrentYear] = useState<string | null>(null);
  const formattedCommitDate = formatDistanceToNow(commitDate, {
    addSuffix: true,
  });
  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="flex items-center justify-center border-t-2 border-mygreen dark:border-myred border-opacity-65 border-dashed py-4 px-2 text-center text-xs gap-3 flex-wrap text-myblack dark:text-white">
      <p>© {currentYear} frérot ntwali</p>

      <p>
        v{process.env.VERSION} |{" "}
        <Link
          className="text-mygreen dark:text-myred decoration-wavy underline decoration-mygreen dark:decoration-myred font-bold "
          href={`https://github.com/iamfrerot/${process.env.NAME}/tree/${process.env.COMMIT_HASH}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {process.env.COMMIT_HASH}
        </Link>{" "}
        from {formattedCommitDate}
      </p>
      <Link
        href={`https://github.com/iamfrerot/${process.env.NAME}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-myblack dark:text-white text-sm  hover:text-mygreen dark:hover:text-myred transition-colors duration-300"
      >
        <FaGithub />
      </Link>
    </footer>
  );
}

export default Footer;
