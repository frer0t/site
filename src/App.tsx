import "./App.css";
import About from "./Components/About";
import Hero from "./Components/Hero";
import { HeroHighlight } from "./ui/HeroHighlight";
import { ThemeProvider } from "./Components/ThemeProvider";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";

function App() {
 return (
  <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
   <main className='border border-white dark:border-black-100 bg-white dark:bg-black-100'>
    <HeroHighlight containerClassName='bg-white dark:bg-black-100 px-4 md:px-10 pb-6 overflow-x-hidden'>
     <Hero />
     <About />
     <Experience />
     <Projects />
     <Skills />
     <Contact />
     <Footer />
    </HeroHighlight>
   </main>
  </ThemeProvider>
 );
}

export default App;
