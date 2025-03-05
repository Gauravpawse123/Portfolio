import { Projects } from "@/types/projects";

const projectData: Projects[] = [
  {
    id: 1,
    title: "Belogistics - client Website",
    paragraph:
      "Belogistics is a leading logistics company in India. They provide all types of logistics services.",
    image: "/images/projects/belogistics.avif",
    tags: ["Logistics"],
    href:"https://belogistics.in",
  },
  {
    id: 2,
    title: "Palm Jebel Ali",
    paragraph:
      "A world of island living, waking up to a beach resort environment with instant city access.",
    image: "/images/projects/palm.avif",
    tags: ["design"],
    href:"#",

  },
  {
    id: 3,
    title: "Ecommerce",
    paragraph:
      "A fully functional e-commerce platform with user authentication, product management, Buyer and Seller platform",
    image: "/images/projects/ecom.avif",
    tags: ["Ecommerce"],
    href:"#",

  },
];
export default projectData;
