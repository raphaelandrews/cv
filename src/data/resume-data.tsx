import NdrwsLogo from "@/images/logos/ndrws.svg";
import FsxLogo from "@/images/logos/fsx.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Raphael Andrews",
  initials: "ndrws",
  location: "Aracaju/SE",
  about:
    "Desenvolvedor Web Fullstack",
  summary:
    "Desenvolvedor Fullstack com especialidade em Frontend. Crio soluções que aprimoram as experiências do usuário e resolvem problemas. Construo interfaces de usuário responsivas, dinâmicas e interativas. Criação de APIs REST. Sou Proativo e tenho facilidade com trabalho em equipe.",
  avatarUrl: "",
  personalWebsiteUrl: "https://ndrws.dev",
  websiteUrl: "ndrws.dev",
  contact: {
    email: "hey@ndrws.dev",
    tel: "+5579988666446",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/raphaelandrews",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raphael-andrews/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/_ndrws",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Centro Universitário Senac Santo Amaro",
      degree: "Tecnólogo em Sistemas para Internet",
      start: "out 21",
      end: "out 24",
    },
    {
      school: "Gama Academy",
      degree: "Gama XP - Desenvolvimento Web",
      start: "out 22",
      end: "mar 23",
    },
  ],
  work: [
    {
      company: "Freelancer",
      link: "https://ndrws.dev",
      badges: [],
      title: "Full Stack Developer",
      logo: NdrwsLogo,
      start: "mar 2023",
      end: "atual",
      description:
        "Criação de aplicações web, desde a interface até implementação do frontend e backend. Stack principal: Next.js, Typescript, Tailwind, MySQL, Postgres",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Postgres",
    "Tailwind",
    "Styled-components",
    "Prisma",
    "Express.js",
    "Koa.js",
    "C#",
    "ASP.NET",
    "Entity Framework"
  ],
  projects: [
    {
      title: "Federação Sergipana de Xadrez",
      techStack: [
        "TypeScript",
        "Next.js",
        "Tailwind",
        "Planetscale",
      ],
      description: "Site institucional com sistema de rating e API própria",
      logo: FsxLogo,
      link: {
        label: "fsx.org.br",
        href: "https://www.fsx.org.br",
      },
    },
  ],
} as const;
