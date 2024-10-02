import { CiLink } from "react-icons/ci";
import Highlightext from "./Highlightext";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import SectionTitle from './SectionTitle';
const About = () => {
 const p1 = useRef(null);
 const p2 = useRef(null);
 const isInViewP1 = useInView(p1);
 const isInViewP2 = useInView(p2);
 const p1Controls = useAnimation();
 const p2Controls = useAnimation();

 useEffect(() => {
  if (isInViewP1) {
   p1Controls.start('visible');
  }
  if (isInViewP2) {
   p2Controls.start('visible');
  }
 }, [isInViewP1, isInViewP2]);
 return (
  <section id="about">
   <SectionTitle title="About Me" />
   <motion.p
    ref={p1}
    variants={{
     hidden: { opacity: 0, y: 100 },
     visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={p1Controls}
    transition={{ duration: 0.9 }}
    className="mt-4 text-black-100 dark:text-white text-base sm:text-lg sm:text-center "
   >
    Hey there, I’m <Highlightext text="frérot" styles="font-bold" />, a{' '}
    <Highlightext text="front-end Engineer" styles="font-bold" /> with a passion
    for creating visually appealing, user-friendly, and responsive web
    applications. I specialize in building clean, interactive interfaces using
    technologies like <Highlightext text="Next-js" styles="font-bold" />,{' '}
    <Highlightext text="React-Native" styles="font-bold" />,{' '}
    <Highlightext text="React-js" styles="font-bold" />,{' '}
    <Highlightext text="Typescript" styles="font-bold" />
   </motion.p>
   <motion.p
    ref={p2}
    animate={p2Controls}
    variants={{
     hidden: { opacity: 0, y: 100 },
     visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    transition={{ duration: 0.9 }}
    className="mt-4 text-black-100 dark:text-white text-base sm:text-lg sm:text-center"
   >
    While my focus is on front-end development, I also have experience with
    back-end technologies like
    <Highlightext text="Express-js" styles="font-bold" />,{' '}
    <Highlightext text="Node-js" styles="font-bold" /> to ensure smooth
    integration and functionality. I’m always striving to balance design and
    performance, creating seamless user experiences from the ground up.
   </motion.p>
   <motion.p
    ref={p2}
    animate={p2Controls}
    variants={{
     hidden: { opacity: 0, y: 100 },
     visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    transition={{ duration: 0.9, delay: 0.2 }}
    className="mt-3 italic text-black-100 dark:text-white text-base sm:text-lg text-center"
   >
    "fun fact when i'm not coding, i enjoy basketball 🏀, listing to music 🎧
    and{' '}
    <a
     className="inline-flex hover:underline transition text-yellow-500"
     href="https://monkeytype.com/profile/frerot"
     target="_blank"
    >
     monkeytype,
     <CiLink />
    </a>{' '}
    I also enjoy learning new things."
   </motion.p>
  </section>
 );
};

export default About;
