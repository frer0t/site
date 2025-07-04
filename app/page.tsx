import Career from "@/components/Career";
import CopyToClipBoard from "@/components/CopyToClipBoard";
import Header from "@/components/Header";
import HighlightText from "@/components/HighlightText";
import Href from "@/components/Href";
import ModeDev from "@/components/ModeDev";
import Hobbies from "@/components/mdx/Hobbies.mdx";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { cookies } from "next/headers";
import Image from "next/image";
type PageProps = {
  searchParams: Promise<{ message: string }>;
};
export default async function HomePage({ searchParams }: PageProps) {
  const cookieStore = await cookies();
  const mode = cookieStore.get("mode")?.value;
  const queryParams = await searchParams;
  const message = queryParams.message;

  return (
    <AnimatePresence mode="wait">
      {(mode as string) === "false" ? (
        <ModeDev paramsMessage={message as string} />
      ) : (
        <>
          <Header key={4} />
          <motion.main
            key={2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: 200, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col p-4 md:py-4 gap-3 md:items-center ">
              <div className="flex flex-col  md:p-0 md:flex-row md:justify-center md:flex-wrap gap-8 ">
                <Image
                  src={"/me-light.jpeg"}
                  width={380}
                  height={380}
                  priority={true}
                  alt="frérot ntwali's picture"
                  className="rounded-lg aspect-square object-cover border-2 border-mygreen dark:border-myred border-opacity-65 border-dashed h-fit dark:hidden"
                />
                <Image
                  src={"/me-dark.jpeg"}
                  width={380}
                  height={380}
                  priority={true}
                  alt="frérot ntwali's picture"
                  className="rounded-lg aspect-square object-cover border-2 border-mygreen dark:border-myred border-opacity-65 border-dashed h-fit hidden dark:block"
                />

                <div className="text-myblack dark:text-white/80 max-w-[36rem] flex flex-col gap-2 leading-[1.8]">
                  <p>
                    <span className="font-semibold text-md dark:text-white">
                      hi, i&apos;m frérot ntwali
                    </span>
                    , i&apos;m a{" "}
                    <HighlightText>Software engineer</HighlightText> building
                    full-stack applications at{" "}
                    <Href to="https://kigalisoftware.com">kigalisoftware.</Href>{" "}
                    and it all started in 2023, with{" "}
                    <Href to="https://andela.com">andela.</Href>
                  </p>
                  <p>
                    <HighlightText>
                      i <span className="animate-ping">❤️</span> lowercase
                    </HighlightText>
                    , side projects and breaking pbs on{" "}
                    <Href to="https://monkeytype.com/profile/frerot">
                      monkeytype.
                    </Href>
                  </p>
                  <CopyToClipBoard
                    text="me@frerot.dev"
                    className="py-4 px-4 bg-transparent dark:bg-transparent border border-dashed border-mygreen dark:border-myred"
                    contentClassName="text-lg"
                  >
                    📧 me[at]frerot.dev
                  </CopyToClipBoard>
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
                  <Career />
                </div>
              </div>
            </div>
          </motion.main>
        </>
      )}
    </AnimatePresence>
  );
}
