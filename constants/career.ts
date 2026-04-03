import type { ICareerCompany } from "@/types/constants";

function logoFromDomain(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

const career: ICareerCompany[] = [
  {
    company: "Sevenx HQ",
    companyLink: "https://www.sevenxhq.com/",
    logoUrl: logoFromDomain("sevenxhq.com"),
    roles: [
      {
        role: "AI & Automation Engineer",
        location: "On-site, Kigali",
        start: "2025-12-01",
        done: [
          "Built Ai Feature Prototypes & Integrate Current System",
          "Automated internal processes",
        ],
      },
      {
        role: "Backend Engineer",
        location: "On-site, Kigali",
        start: "2025-07-01",
        end: "2025-12-01",
        done: [
          "Built internal tool for Better Management & Collaboration",
          "Integrated Github and Slack For custom use Cases.",
        ],
      },
    ],
  },
  {
    company: "Kigali Software",
    companyLink: "https://www.kigalisoftware.com/",
    logoUrl: logoFromDomain("kigalisoftware.com"),
    roles: [
      {
        role: "Software Engineer",
        location: "Remote, Kigali",
        start: "2025-04-02",
        end: "2025-12-05",
        done: [
          "Developed and maintained web applications",
          "Implemented RESTful APIs and integrated third-party services.",
          "Building a best way to get car insurance in Rwanda",
        ],
      },
    ],
  },
  {
    company: "The House Of Kemmy",
    companyLink: "https://www.kemmy.org/",
    logoUrl: logoFromDomain("kemmy.org"),
    roles: [
      {
        role: "Software Engineer Contractor",
        location: "Contract, Kigali",
        start: "2025-03-01",
        end: "2025-07-04",
        done: [
          "Built mobile apps for client companies",
          "Developed the we-mep app with payment, sms and email integration",
          "Developed Zenger, a property valuation app",
          "Improved app architecture and user experience",
          "Added new features and maintained existing websites",
        ],
      },
    ],
  },
  {
    company: "Gobi",
    companyLink: "https://www.gobi.rw/",
    logoUrl: logoFromDomain("gobi.rw"),
    roles: [
      {
        role: "Software Engineer",
        location: "Remote, Kigali",
        start: "2024-11-01",
        end: "2025-03-31",
        done: [
          "Built next-gen ride-sharing solution.",
          "Developed innovative delivery system.",
          "Optimized infrastructure for scalability.",
          "Implemented CI/CD pipelines with GitHub Actions.",
        ],
      },
    ],
  },
  {
    company: "Eden Care Medical",
    companyLink: "https://www.edencaremedical.com/",
    logoUrl: logoFromDomain("edencaremedical.com"),
    roles: [
      {
        role: "Backend Engineer",
        location: "Remote, Kigali",
        start: "2024-10-07",
        end: "2025-02-28",
        done: [
          " Developed REST APIs for core functionalities using Spring Boot and Java.",
          " Managed AWS EC2 instances and set up nginx for load balancing and reverse proxy.",
          "Collaborated with team members to ensure seamless backend operations.",
        ],
      },
      {
        role: "Frontend Engineer intern",
        location: "hybrid, Kigali",
        start: "2024-07-08",
        end: "2024-10-09",
        done: [
          "Built UI components library",
          "Conducted components testing and quality assurance",
          "automated components deployment",
          "documented components with Storybook",
          "automated Storybook deployment for team reference",
          "contributed to core frontend systems",
        ],
      },
    ],
  },
  {
    company: "Andela",
    companyLink: "https://www.andela.com/",
    logoUrl: logoFromDomain("andela.com"),
    roles: [
      {
        role: "Technical Leadership program participant",
        location: "remote, Kigali",
        start: "2024-02-13",
        end: "2024-11-24",
        done: [
          "Developed full-stack app e-commerce app",
          "Collaborated in cross-functional team project",
          "Performed code reviews and pair programming",
          "Automated builds/deployment with GitHub Actions",
          "Participated in technical leadership workshops",
        ],
      },
    ],
  },
  {
    company: "ICT Chamber & Digital africa",
    companyLink: "https://talent4startups.digital-africa.co/",
    logoUrl: logoFromDomain("digital-africa.co"),
    roles: [
      {
        role: "Digital Africa Program participant",
        location: "hybrid, Kigali",
        start: "2024-03-15",
        end: "2024-06-30",
        done: [
          "Built mobile apps with React Native",
          "Collaborated on cross-functional projects",
          "Participated in code reviews and workshops",
          "Set up CI/CD with Expo EAS deployment",
        ],
      },
    ],
  },
];

export default career;
