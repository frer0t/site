import { CiLink } from "react-icons/ci";
import Highlightext from "./Highlightext";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const About = () => {
 const p1 = useRef(null);
 const p2 = useRef(null);
 const isInViewP1 = useInView(p1);
 const isInViewP2 = useInView(p2);
 const p1Controls = useAnimation();
 const p2Controls = useAnimation();

 useEffect(() => {
  if (isInViewP1) {
   p1Controls.start("visible");
  }
  if (isInViewP2) {
   p2Controls.start("visible");
  }
 }, [isInViewP1, isInViewP2]);
 return (
  <section id='about'>
   <h1 className='text-black-100 dark:text-white text-center text-3xl sm:text-4xl font-semibold'>
    About Me
   </h1>
   <motion.p
    ref={p1}
    variants={{
     hidden: { opacity: 0, y: 100 },
     visible: { opacity: 1, y: 0 },
    }}
    initial='hidden'
    animate={p1Controls}
    transition={{ duration: 0.9, delay: 0.2 }}
    className='mt-4 text-black-100 dark:text-white text-base sm:text-lg sm:text-center '
   >
    After graduating in networking, i decided to pursue my passion for
    programming. i enrolled in andela technical leadership program{" "}
    <a
     href='https://webreverseproxy.andela.com/andela-technical-leadership-program-rwanda'
     target='_blank'
     className='text-[#058846] hover:underline inline-flex  transition duration-300'
    >
     (ATLP)
     <CiLink className='inline text-lg' />
    </a>{" "}
    a nine-month accelerator program, where i gained proficiency in
    <Highlightext text='javascript/typescript' /> for both{" "}
    <Highlightext text='front-end' /> and <Highlightext text='back-end' />
    developement, as well as skills in <Highlightext text='html, css,' /> and
    web frameworks like <Highlightext text='react/redux' /> for building user
    interfaces. i acquired experience working with
    <Highlightext text='databases' /> like{" "}
    <Highlightext text='postgresql & monogodb,' /> server-side framewords such
    as <Highlightext text='express.js,' /> and runtime environments including
    <Highlightext text='node.js.' />
    Not only did the program enhance my technical skills, but it also helped me
    develop
    <Highlightext text='soft skills' />
    for effective <Highlightext text='teamwork' /> and{" "}
    <Highlightext text='collaboration' /> in distrubeted teams, and it enhanced
    my project management abilities.
   </motion.p>
   <motion.p
    ref={p2}
    animate={p2Controls}
    variants={{
     hidden: { opacity: 0, y: 100 },
     visible: { opacity: 1, y: 0 },
    }}
    initial='hidden'
    transition={{ duration: 0.9, delay: 0.2 }}
    className='mt-4 text-black-100 dark:text-white text-base sm:text-lg sm:text-center'
   >
    I also joined the Talent 4 Startups program{" "}
    <a
     href='https://talent4startups.digital-africa.co/'
     target='_blank'
     className='text-[#b17bc5] hover:underline inline-flex  transition duration-300'
    >
     (t4s)
     <CiLink className='inline text-lg' />
    </a>{" "}
    a fully-funded scholarship initiative by{" "}
    <a
     href='https://digital-africa.co/en'
     target='_blank'
     className='text-[#b17bc5] hover:underline inline-flex transition duration-300'
    >
     digital africa
     <CiLink className='inline text-lg' />
    </a>{" "}
    in collaboration with the{" "}
    <a
     href='https://www.ictchamber.rw/'
     target='_blank'
     className='text-[#c6a007] hover:underline inline-flex transition duration-300'
    >
     ICT Chamber
     <CiLink className='inline text-lg' />
    </a>{" "}
    aimed at addressing the skills needs of early-stage and scaling startups in
    Africa. The program offers comprehensive training in various tech fields. It
    <Highlightext text='taught' /> me how to create{" "}
    <Highlightext text='mobile applications' /> using{" "}
    <Highlightext text='React Native' /> and further strengthened my technical
    and operational skills, preparing me for a successful career in the tech
    industry.
   </motion.p>
   <motion.p
    ref={p2}
    animate={p2Controls}
    variants={{
     hidden: { opacity: 0, y: 100 },
     visible: { opacity: 1, y: 0 },
    }}
    initial='hidden'
    transition={{ duration: 0.9, delay: 0.2 }}
    className='mt-3 italic text-black-100 dark:text-white text-base sm:text-lg sm:text-center'
   >
    "fun fact when i'm not coding, i enjoy basketball🏀, listing to music🎧 and{" "}
    <a
     className='inline-flex hover:underline transition text-yellow-500'
     href='https://monkeytype.com/profile/frerot._'
     target='_blank'
    >
     monkeytype,
     <CiLink />
    </a>{" "}
    I also enjoy learning new things."
   </motion.p>
  </section>
 );
};

export default About;
