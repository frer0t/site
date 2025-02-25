import Career from "@/components/Career";
import Header from "@/components/Header";
import HighlightText from "@/components/HighlightText";
import Href from "@/components/Href";
import Hobbies from "@/components/mdx/Hobbies.mdx";
import * as motion from "motion/react-client";
import Image from "next/image";
export default async function HomePage() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/career`);
  const career_data = await data.json();

  return (
    <main>
      <Header />
      <motion.div
        key={2}
        className="flex flex-col p-4 md:py-4 gap-3 md:items-center "
      >
        <div className="flex flex-col  md:p-0 md:flex-row md:justify-center md:flex-wrap gap-8 ">
          <Image
            src={"/me.jpg"}
            width={380}
            height={380}
            priority
            alt="frérot ntwali's picture"
            className="rounded-lg aspect-square object-cover border-2 border-mygreen dark:border-myred border-opacity-65 border-dashed h-fit"
          />

          <div className="text-myblack dark:text-white/80 md:max-w-[36rem] flex flex-col gap-2 leading-[1.8]">
            <p>
              <span className="font-semibold text-md dark:text-white">
                hi,i&apos;m frérot ntwali
              </span>
              , i started software engineering in 2023, with{" "}
              <Href to="https://www.andela.com/blog-posts/andela-technical-leadership-program-investing-in-africas-tech-ecosystem-through-talent-development">
                andela (ATLP).
              </Href>
            </p>
            <p>
              i&apos;m currently{" "}
              <HighlightText>frontend engineer</HighlightText> at{" "}
              <Href to="https://gobi.rw">gobi.</Href> before that, i was{" "}
              <HighlightText>backend engineer</HighlightText> at{" "}
              <Href to="https://edencaremedical.com">eden care medical.</Href>
            </p>
            <p>
              <HighlightText>
                i <span className="animate-ping">❤️</span> lowercase
              </HighlightText>
              , side projects and{" "}
              <Href to="https://monkeytype.com/profile/frerot">
                monkeytype.
              </Href>
            </p>
            <div className="prose dark:prose-stone">
              <Hobbies />
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-7xl font-medownhere mb-6 md:text-center ">
            <HighlightText>career</HighlightText>
          </h1>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <Career career={career_data} />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
