"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const links = [
  { href: "/", label: "home" },
  { href: "/resume", label: "resume" },
  { href: "/blog", label: "blog" },
  { href: "/identity", label: "identity" },
];
const socials = [
  { href: "https://linkedin.com/in/frerotntwali", Icon: FaLinkedin },
  { href: "https://github.com/iamfrerot", Icon: FaGithub },
];
const Nav = () => {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "frérot ntwali's resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const pathname = usePathname();
  return (
    <nav className="flex justify-center items-center flex-wrap gap-x-8 gap-y-3 p-1">
      <ul className="flex justify-center items-center gap-x-4 flex-wrap">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link
              key={`${href}${label}`}
              href={href}
              onClick={href === "/resume" ? handleDownload : undefined}
              className={`text-sm sm:text-lg text-myblack hover:text-mygreen  transition-colors duration-300 lowercase ${
                pathname === href
                  ? "text-mygreen underline decoration-wavy"
                  : "text-myblack"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex justify-center items-center gap-x-3 flex-wrap">
        {socials.map(({ href, Icon }) => (
          <li key={href}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-myblack text-xl  hover:text-mygreen transition-colors duration-300"
            >
              <Icon />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
