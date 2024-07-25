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
import { Toaster } from "react-hot-toast";
import Navbar from "./Components/Navbar";

function App() {
 return (
  <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
   <main className='border border-white dark:border-black-100 bg-white dark:bg-black-100 flex flex-col'>
    <Navbar />
    <HeroHighlight containerClassName='bg-white dark:bg-black-100 px-4 md:px-10 py-4 overflow-x-hidden'>
     <Hero />
     <About />
     <Experience />
     <Projects />
     <Skills />
     <Contact />
     <Footer />
     <Toaster
      position='bottom-right'
      toastOptions={{
       style: {
        background: "#363636",
        color: "#fff",
       },
      }}
     />
    </HeroHighlight>
   </main>
  </ThemeProvider>
 );
} 

export default App;
