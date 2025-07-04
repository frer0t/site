"use client";
import { getMonkeyTypeData } from "@/services/monkeytype-data";
import { MonkeyTypeData } from "@/types/monkeytype";
import {
  getMonkeyTypeDisplayText,
  getMonkeyTypeTimestampText,
} from "@/utils/monkeytype";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import Switch from "./SwitchMode";

function Footer() {
  const commitDate = new Date(process.env.COMMIT_DATE!);
  const [monkeyTypeData, setMonkeyTypeData] = useState<MonkeyTypeData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  const formattedCommitDate = formatDistanceToNow(commitDate, {
    addSuffix: true,
  });

  useEffect(() => {
    const fetchMonkeyTypeData = async () => {
      try {
        const data = await getMonkeyTypeData();
        setMonkeyTypeData(data);
      } catch (error) {
        console.error("Error fetching MonkeyType data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMonkeyTypeData();
  }, []);

  return (
    <footer className="flex items-center justify-center border-t-2 border-mygreen dark:border-myred border-opacity-65 border-dashed py-4 px-2 text-center text-xs gap-3 flex-wrap text-myblack dark:text-white">
      <p>© {new Date().getFullYear().toString()} frérot ntwali</p>
      <p>
        v{process.env.VERSION} |{" "}
        <Link
          className="text-mygreen dark:text-myred decoration-wavy underline decoration-mygreen dark:decoration-myred font-bold "
          href={`https://github.com/frer0t/${process.env.NAME}/tree/${process.env.COMMIT_HASH}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {process.env.COMMIT_HASH}
        </Link>{" "}
        {formattedCommitDate}
      </p>
      <p>
        |{" "}
        <Link
          href={"https://monkeytype.com/profile/frerot"}
          target="_blank"
          className="text-mygreen dark:text-myred decoration-wavy underline decoration-mygreen dark:decoration-myred font-bold"
        >
          {isLoading ? "..." : getMonkeyTypeDisplayText(monkeyTypeData)}
        </Link>{" "}
        {isLoading ? "..." : getMonkeyTypeTimestampText(monkeyTypeData)}
      </p>
      <Link
        href={`https://github.com/frer0t/${process.env.NAME}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-myblack dark:text-white text-sm  hover:text-mygreen dark:hover:text-myred transition-colors duration-300"
      >
        <FaGithub />
      </Link>
      <Switch />
    </footer>
  );
}

export default Footer;
