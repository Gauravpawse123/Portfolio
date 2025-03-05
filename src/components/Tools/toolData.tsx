import { Tools } from "@/types/skills";
import Image from "next/image";
const ToolData: Tools[] = [
  {
    id: 1,
    icon: (
     <Image src="/images/skills/vscode.png" alt="VSCODE" height={600} width={600}/>
    ),
    title: "VsCode"
  },
  {
    id: 2,
    icon: (
     <Image src="/images/skills/postman.png" alt="PostMan" height={600} width={600}/>
    ),
    title: "PostMan"
  },
  {
    id: 3,
    icon: (
     <Image src="/images/skills/mongodbCompass.png" alt="MongoDBCompass" height={600} width={600}/>
    ),
    title: "MongoDBCompass"
  },
  {
    id: 4,
    icon: (
     <Image src="/images/skills/ChatGPT.png" alt="ChatGPT" height={600} width={600}/>
    ),
    title: "ChatGPT"
  },
  {
    id: 5,
    icon: (
     <Image src="/images/skills/chrome.png" alt="Chrome" height={600} width={600}/>
    ),
    title: "Chrome Browser"
  }, 
];
export default ToolData;
