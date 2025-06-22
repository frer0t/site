import Header from "@/components/Header";
import Projects from "@/components/Projects";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portfolio",
  description: "frérot ntwali's portfolio",
};
const PortFolioPage = () => {
  return (
    <main>
      <Header />
      <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-3 py-5 px-3 overflow-y-hidden ">
        <Projects />
      </div>
    </main>
  );
};

export default PortFolioPage;
