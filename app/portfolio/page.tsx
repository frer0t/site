import Header from "@/components/Header";
import Projects from "@/components/Projects";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "portfolio",
  description: "frérot ntwali's portfolio",
};
const PortFolioPage = () => {
  return (
    <main>
      <Header />
      <div className="flex flex-col gap-2 pt-6 pb-16">
        <Projects />
      </div>
    </main>
  );
};

export default PortFolioPage;
