"use client";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Title from "./Title";

const Header = ({ secretTitle }: { secretTitle?: string }) => {
  const pathname = usePathname();
  return (
    <header className="flex flex-col w-full border-b-2 border-mygreen dark:border-myred border-opacity-65 border-dashed py-4">
      <Title
        className="text-6xl sm:text-8xl text-center overflow-hidden font-medium transition-colors duration-300 select-none"
        secretTitle={
          secretTitle
            ? secretTitle
            : pathname === "/"
            ? "frérot ntwali"
            : pathname
        }
      />
      <Nav />
    </header>
  );
};

export default Header;
