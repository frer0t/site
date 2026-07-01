"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "home" },
  { href: "/portfolio", label: "portfolio" },
  { href: "/blog", label: "blog" },
  // {href:"/identity", label:"identity"},
  // { href: "/uses", label: "uses" },
];
const socials = [
  { href: "https://linkedin.com/in/frerotntwali", Icon: FaLinkedin },
  { href: "https://github.com/frer0t", Icon: FaGithub },
];
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 p-1">
      <ul className="flex flex-wrap items-center justify-center gap-x-4">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`} className="flex items-center">
            <Link
              href={href}
              title={`navigate to ${label}`}
              className={`inline-flex min-h-7 items-center text-sm sm:text-lg leading-none lowercase transition-colors duration-300 hover:text-mygreen dark:hover:text-myred ${
                pathname === href
                  ? "text-mygreen underline decoration-wavy decoration-from-font underline-offset-4 dark:text-myred"
                  : "text-myblack dark:text-white"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center gap-x-3">
        {socials.map(({ href, Icon }) => (
          <li key={href} className="flex items-center">
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-7 shrink-0 items-center justify-center text-myblack transition-colors duration-300 hover:text-mygreen dark:text-white dark:hover:text-myred [&_svg]:block [&_svg]:size-5 [&_svg]:shrink-0"
            >
              <Icon />
            </Link>
          </li>
        ))}
        <li className="flex items-center">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
