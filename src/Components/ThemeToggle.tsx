import { useTheme } from "./ThemeProvider";
import { BiMoon, BiSun } from "react-icons/bi";
import { Theme } from "./ThemeProvider";
import { PiDevicesBold } from "react-icons/pi";

const ThemeToggle = () => {
 const { theme, setTheme } = useTheme();
 const toggleTheme = () => {
  const themeOrder: Theme[] = ["light", "dark", "system"];
  const currentIndex = themeOrder.indexOf(theme);
  const nextIndex = (currentIndex + 1) % themeOrder.length;
  setTheme(themeOrder[nextIndex]);
 };
 return (
  <button
   onClick={toggleTheme}
   aria-label='toogle theme'
   className='backdrop-blur-sm p-2 h-10 w-10 hover:text-white hover:bg-secondary  transition-all text-secondary rounded-full fixed right-4 top-20 sm:top-6 z-50 '
  >
   {theme === "dark" && <BiMoon className='h-full w-full' />}
   {theme === "light" && <BiSun className=' h-full w-full' />}
   {theme === "system" && <PiDevicesBold className='h-full w-full' />}
  </button>
 );
};

export default ThemeToggle;
