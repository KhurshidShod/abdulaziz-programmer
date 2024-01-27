"use client";
import styles from "./style.module.scss";
import { projects } from "../../data";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Card from "../Card";
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
      <section ref={container} className={styles.main}>
        <h1>
          My <span>Projects</span>
        </h1>
        <br />
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>
    </Element>
  );
};

export default Projects;
