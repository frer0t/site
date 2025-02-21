import Header from "@/components/Header";
import HighlightText from "@/components/HighlightText";
import Href from "@/components/Href";
import * as motion from "motion/react-client";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <Header />
      <motion.div key={2} className="flex flex-col p-4 md:py-4 gap-3 ">
        <div className="flex flex-col  md:p-0 md:flex-row gap-8 justify-center">
          <Image
            src={"/me.jpg"}
            width={330}
            height={330}
            priority
            alt="frérot ntwali's picture"
            className="rounded-lg aspect-square object-cover border-2 border-mygreen dark:border-myred border-opacity-65 border-dashed h-fit"
          />
          <div className="text-myblack dark:text-white/80 md:max-w-80 flex flex-col gap-2 leading-[1.8]">
            <p>
              <span className="font-medownhere text-5xl dark:text-white">
                hi,i&apos;m frérot ntwali
              </span>
              i started software engineering in 2023, with{" "}
              <Href to="https://www.andela.com/blog-posts/andela-technical-leadership-program-investing-in-africas-tech-ecosystem-through-talent-development">
                andela (ATLP)
              </Href>
              .
            </p>
            <p>
              i&apos;m currently <HighlightText text="frontend engineer" /> at{" "}
              <Href to="https://gobi.rw">gobi</Href>. before that, i was{" "}
              <HighlightText text="backend engineer" /> at{" "}
              <Href to="https://edencaremedical.com">eden care medical</Href>.
            </p>
            <p>
              <HighlightText text="i love lowercase" />, side projects and
              <Href to="https://monkeytype.com/profile/frerot">monkeytype</Href>
              . when i&apos;m not coding, you’ll probably find me cruising
              around on my bike 🚴‍♂️ or shooting hoops 🏀.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <h1 className="text-5xl font-medownhere">
            <HighlightText text="career" />
          </h1>
        </div>
      </motion.div>
    </main>
  );
}
