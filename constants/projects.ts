import { IProject } from "@/types/constants";

const projects: IProject[] = [
  {
    name: "Irekure",
    description:
      "A government platform for citizens to submit and track problems/complaints. To government officials to manage and respond to issues. It streamlines communication between citizens and government, improving service delivery and accountability.",
    demo: "https://irekure.frerot.dev",
    tech: "web",
    type: "oss",
    status: "shipped",
    size: "s",
    github: "https://github.com/frer0t/irekure",
  },
  {
    name: "WE-MEP",
    description:
      "Comprehensive management Mobile app for MEP engineering projects. Features real-time progress tracking, team communication, document management, and service request handling to optimize timelines and reduce costs.",
    demo: "https://we-mep.rw/app",
    tech: "mobile",
    type: "product",
    status: "shipped",
    size: "l",
  },
  {
    name: "gobi platform",
    description:
      "Integrated mobility and logistics platform combining ride-hailing, package delivery, and logistics management. Optimizes routes and connects customers with verified drivers for reliable urban transportation services.",
    demo: "https://gobi.rw",
    tech: "web",
    type: "product",
    status: "in-progress",
    size: "l",
  },
  {
    name: "Eden Care Provider Portal",
    description:
      "A web application for healthcare providers to manage patient care, appointments, and medical records. It streamlines communication between providers and patients, improving healthcare delivery and efficiency.",
    demo: "https://portal.provider.edencaremedical.com",
    tech: "web",
    type: "product",
    status: "shipped",
    size: "l",
  },
  {
    name: "Locus Program",
    description:
      "Business development system for creating sustainable online businesses. Combines mindset training, strategic planning, and practical frameworks with personalized coaching and community support.",
    demo: "https://locus.frerot.dev/",
    tech: "web",
    type: "client",
    status: "shipped",
    size: "s",
  },
  {
    name: "envario",
    description:
      "Command-line utility for validating environment variables against schemas. Supports type checking, default values, and CI/CD integration to prevent deployment of misconfigured applications.",
    demo: "https://www.npmjs.com/package/envario",
    github: "https://github.com/frer0t/envario",
    tech: "package",
    type: "oss",
    status: "shipped",
    size: "s",
  },
];

export default projects;
