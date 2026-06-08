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
import { mydetails } from "@/constants/my-basic-details";
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
            <div className="flex flex-col gap-12 p-4 md:py-6 md:gap-16">
              <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12 lg:gap-16">
                <div className="text-myblack dark:text-white/80 flex min-w-0 flex-1 flex-col gap-3 leading-[1.8] md:max-w-xl">
                  <p>
                    <span className="font-semibold text-md dark:text-white">
                      hi, i&apos;m frérot ntwali
                    </span>
                    , i&apos;m a{" "}
                    <HighlightText>Software engineer</HighlightText> building
                    full-stack applications at{" "}
                    <Href to="https://www.sevenxhq.com/">sevenxhq.</Href> and it
                    all started in 2023, with{" "}
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
                    text={mydetails.contact_details.email}
                    className="py-4 px-4 bg-transparent dark:bg-transparent border border-dashed border-mygreen dark:border-myred"
                    contentClassName="text-lg"
                  >
                    📧 mail[at]frerot.dev
                  </CopyToClipBoard>
                  <div className="max-w-none text-inherit [&_p]:my-0 [&_p+p]:mt-2 [&_strong]:font-semibold [&_strong]:text-myblack [&_strong]:dark:text-white">
                    <Hobbies />
                  </div>
                </div>

                <div className="mx-auto flex shrink-0 justify-center md:mx-0 md:justify-end">
                  <Image
                    src={"/me-light.jpg"}
                    width={320}
                    height={320}
                    alt="frérot ntwali's picture"
                    className="aspect-square h-auto w-full max-w-[min(100%,280px)] rounded-lg object-cover object-top dark:hidden sm:max-w-xs md:max-w-[280px] lg:max-w-xs"
                  />
                  <Image
                    src={"/me-dark.jpg"}
                    width={320}
                    height={320}
                    alt="frérot ntwali's picture"
                    className="hidden aspect-square h-auto w-full max-w-[min(100%,280px)] rounded-lg object-cover object-top dark:block sm:max-w-xs md:max-w-[280px] lg:max-w-xs"
                  />
                </div>
              </section>

              <div className="flex w-full flex-col">
                <h1 className="text-7xl font-medownhere mb-6 md:text-center ">
                  <HighlightText>career</HighlightText>
                </h1>

                <Career />
              </div>
            </div>
          </motion.main>
        </>
      )}
    </AnimatePresence>
  );
}
