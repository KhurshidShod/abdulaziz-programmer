import Image from "next/image";
import styles from "./style.module.scss";
import Link from "next/link";
import Magnetic from "@/commons/Magnetic";
import { Element } from "react-scroll";

const Projects = () => {
  const projects = [
    {
      index: "01",
      image: "/images/projects/1.jpg",
      title: "Crypto Screener Application",
      descr:
        "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
      link: "https://abdulaziz-programmer.uz",
    },
    {
      index: "02",
      image: "/images/projects/2.jpg",
      title: "Crypto Screener Application",
      descr:
        "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
      link: "https://abdulaziz-programmer.uz",
    },
    {
      index: "03",
      image: "/images/projects/3.jpg",
      title: "Crypto Screener Application",
      descr:
        "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
      link: "https://abdulaziz-programmer.uz",
    },
  ];
  return (
    <Element name="projects">
      <section className={styles.projects}>
        <div className="container">
          <br />
          <h1>
            My <span>Project</span>
          </h1>
          <br />
          <div className={styles.projects_row}>
            {projects.map((project) => (
              <>
                <div className={styles.project}>
                  <div className={styles.project_img}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={530}
                      height={397}
                    />
                  </div>
                  <div className={styles.project_txt}>
                    <h1>{project.index}</h1>
                    <h2>{project.title}</h2>
                    <p>{project.descr}</p>
                    <Link target="_blank" href={project.link}>
                      <Magnetic>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      </Magnetic>
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className={styles.view_more}>
          <Magnetic>
            <button>
              <Magnetic>
                <span>View More</span>
              </Magnetic>
            </button>
          </Magnetic>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
// "use client";
// import styles from "./style.module.scss";
// import { projects } from "../../data";
// import { useScroll } from "framer-motion";
// import { useEffect, useRef } from "react";
// import Lenis from "@studio-freight/lenis";
// import Card from "../Card";

// function Projects() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   useEffect(() => {
//     const lenis = new Lenis();

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);
//   });

//   return (
//     <section ref={container} className={styles.main}>
//       <h1>
//         My <span>Projects</span>
//       </h1>
//       <br />
//       {projects.map((project, i) => {
//         const targetScale = 1 - (projects.length - i) * 0.05;
//         return (
//           <Card
//             key={`p_${i}`}
//             i={i}
//             {...project}
//             progress={scrollYProgress}
//             range={[i * 0.25, 1]}
//             targetScale={targetScale}
//           />
//         );
//       })}
//     </section>
//   );
// }

// export default Projects;
