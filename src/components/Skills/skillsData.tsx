import { Skills } from "@/types/skills";
import Image from "next/image";
const skillsData: Skills[] = [
  {
    id: 1,
    icon: (
     <Image src="/images/skills/html.png" alt="HTML" height={600} width={600}/>
    ),
    title: "HTML"
  },
  {
    id: 2,
    icon: (
     <Image src="/images/skills/css.png" alt="CSS" height={600} width={600}/>
    ),
    title: "CSS"
  },
  {
    id: 3,
    icon: (
     <Image src="/images/skills/bootstrap.png" alt="Bootstrap" height={600} width={600}/>
    ),
    title: "Bootstrap"
  },
  {
    id: 4,
    icon: (
     <Image src="/images/skills/tailwind.png" alt="TailwindCSS" height={600} width={600}/>
    ),
    title: "Tailwind CSS"
  },
  {
    id: 5,
    icon: (
     <Image src="/images/skills/javascript.png" alt="Javascript" height={600} width={600}/>
    ),
    title: "Javascript"
  },
  {
    id: 6,
    icon: (
     <Image src="/images/skills/typescript.png" alt="Typescript" height={600} width={600}/>
    ),
    title: "Typescript"
  },
  {
    id: 7,
    icon: (
     <Image src="/images/skills/react.png" alt="React.js" height={600} width={600}/>
    ),
    title: "React.js"
  },
  {
    id: 8,
    icon: (
     <Image src="/images/skills/next.png" alt="Next.js" height={600} width={600}/>
    ),
    title: "Next.js"
  },
  {
    id: 9,
    icon: (
     <Image src="/images/skills/nodejs.png" alt="Node.js" height={600} width={600}/>
    ),
    title: "Node.js"
  },
  {
    id: 10,
    icon: (
     <Image src="/images/skills/expressjs.png" alt="Express.js" height={600} width={600}/>
    ),
    title: "Express.js"
  },
  {
    id: 11,
    icon: (
     <Image src="/images/skills/mongodb.png" alt="MongoDB" height={600} width={600}/>
    ),
    title: "MongoDB"
  },
  {
    id: 12,
    icon: (
     <Image src="/images/skills/redux.png" alt="Redux" height={600} width={600}/>
    ),
    title: "Redux"
  },
  {
    id: 13,
    icon: (
     <Image src="/images/skills/git.png" alt="GIt" height={600} width={600}/>
    ),
    title: "Git"
  },
  {
    id: 14,
    icon: (
     <Image src="/images/skills/github.png" alt="Github" height={600} width={600}/>
    ),
    title: "GitHub"
  },
  {
    id: 15,
    icon: (
     <Image src="/images/skills/material-ui.png" alt="MaterialUI" height={600} width={600}/>
    ),
    title: "Material UI"
  },
  
];
export default skillsData;
