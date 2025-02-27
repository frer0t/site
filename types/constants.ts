interface ICareer {
  role: string;
  company: string;
  companyLink: string;
  location: string;
  start: string;
  end?: string;
  done: string[];
  stack: string[];
}
interface IProject {
  name: string;
  cover: string;
  description: string;
  github?: string;
  demo: string;
  type: "client" | "oss" | "product";
  tech: "web" | "backend" | "mobile" | "devops/cloud" | "ai/ml" | "package";
  size: "s" | "m" | "l";
  status: "in-progress" | "completed";
}
