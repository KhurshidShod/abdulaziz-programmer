import Image from "next/image";
import styles from "./style.module.scss";
import Link from "next/link";
import Magnetic from "@/commons/Magnetic";

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
    {
      index: "04",
      image: "/images/projects/2.jpg",
      title: "Crypto Screener Application",
      descr:
        "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
      link: "https://abdulaziz-programmer.uz",
    },
  ];
  return (
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
              <span>
                View More 12 <i class="fa-solid fa-chevron-down"></i>
              </span>
            </Magnetic>
          </button>
        </Magnetic>
      </div>
    </section>
  );
};

export default Projects;
