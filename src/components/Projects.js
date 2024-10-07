import ProjectCard from "./ProjectCard";
import "./project.css";
import Sparkle from "../assets/img/images/Sparkle.png"

import FashionFusion from "../assets/img/images/FashionFusion.png"
import ConvexTechImage from "../assets/img/convtech.png";
import TypeScript from "../assets/img/images/TypeScript.png"
import html from "../assets/img/html1.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";


export const Projects = () => {
  const projectData = [
    {
      image: Sparkle,
      title: "Sparkle",
      description: `Sparkle is a captivating online jewelry platform, created as a clone, inspired by the elegance and craftsmanship of Tanishq. Our mission is to provide users with a simulated experience of exploring a curated collection of exquisite jewelry pieces that symbolize life's special moments.`,
      techStack: [
        { image: html, name: "HTML" },
        { image: css, name: "CSS" },
        { image: js, name: "JS" },
      ],
      liveLink: "https://sparkle-clone.netlify.app/",
      githubLink: "https://github.com/Anujkumar960/Sparkle?tab=readme-ov-file",
    },
    {
      image: FashionFusion,
      title: "Fashion Fusion",
      description:
        "Our team created FashionFusion, an e-commerce clothing website that specializes in fashion and lifestyle products during Masai School's Construct Week. We used TypeScript, React, Chakra UI, and Redux Toolkit to bring this project to life in just five days.",
      techStack: [
        { image: html, name: "HTML" },
        { image: css, name: "CSS" },
        { image: js, name: "JS" },
        { image: TypeScript, name: "TS" },

        {
          image:
            "https://pluspng.com/img-png/react-logo-png-javascript-logo-react-js-stickers-mugs-t-shirts-and-much-more-880x1136.jpg",
          name: "React",
        },
      ],
      liveLink: "https://fashionfusion04.netlify.app/",
      githubLink: "https://github.com/Renuka19990/Cloud-Chintak-2345?tab=readme-ov-file",
    },
    {
      image: ConvexTechImage,
      title: "ConvexTech",
      description:
        "ConvexTech Inc. is a global specialist in staffing, recruiting, and consulting across IT, non-IT, engineering, and healthcare sectors, with a strong foothold in software development.",
      techStack: [
        { image: html, name: "HTML" },
        { image: css, name: "CSS" },
        { image: js, name: "JS" },
        {
          image:
            "https://pluspng.com/img-png/react-logo-png-javascript-logo-react-js-stickers-mugs-t-shirts-and-much-more-880x1136.jpg",
          name: "React",
        },
      ],
      liveLink:
        "https://667059a45686ac00927c9621--delicate-maamoul-04d99a.netlify.app/Home",
      githubLink: "https://github.com/NikitaMane12/eBay-Egale",
    },
    
  ];

  return (
    <section id="projects">
      <div className="heading">
        <h1 style={{ textAlign: "center" }}>Project</h1>
      </div>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
