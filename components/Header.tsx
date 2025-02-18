"use client";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Title from "./Title";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex flex-col w-full border-b-2 border-mygreen border-opacity-65 border-dashed py-4">
      <Title sectretTitle={pathname === "/" ? "frérot ntwali" : pathname} />
      <Nav />
    </header>
  );
};

export default Header;
