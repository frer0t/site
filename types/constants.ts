interface ICareer {
  role: string;
  company: string;
  companyLink: string;
  location: string;
  start: string;
  end?: string;
  done: string[];
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
interface IFeedback {
  initials: string;
  message: string;
  feedback?: string;
  link?: string;
  created_at: string;
}
export type { ICareer, IFeedback, IProject };
