import "./App.css";
import About from "./Components/About";
import Hero from "./Components/Hero";
import { HeroHighlight } from "./ui/HeroHighlight";
import { ThemeProvider } from "./Components/ThemeProvider";
import Projects from "./Components/Projects";

function App() {
 return (
  <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
   <main className='bg-white dark:bg-black-100 overflow-y-scroll no-scrollbar h-screen'>
    <HeroHighlight containerClassName='bg-white dark:bg-black-100 px-8 pb-6'>
     <Hero />
     <About />
     <Projects />
    </HeroHighlight>
   </main>
  </ThemeProvider>
 );
}

export default App;
