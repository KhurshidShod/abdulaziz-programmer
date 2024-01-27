import styles from "./style.module.scss";
import { AiFillInstagram } from "react-icons/ai";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { FaGitAlt, FaPython, FaNode, FaPhp } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import Magnetic from "@/commons/Magnetic";
import { Element } from 'react-scroll';

const Skills = () => {
  return (
    <Element name="skills">
    <section className={styles.skills}>
      <div className="container">
        <div className={styles.skills__wrapper}>
          <h1>
            My <span>Skills</span>
          </h1>
          <div className={styles.skills__wrapper_cards}>
            <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><div><FaGitAlt size={80} /></div></Magnetic>
                <h1>Git</h1>
              </div>
            </div>
            <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><div><RiJavascriptFill size={80} /></div></Magnetic>
                <h1>Javascript</h1>
              </div>
            </div>
            <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><div><BiLogoTypescript size={80} /></div></Magnetic>
                <h1>Typescript</h1>
              </div>
            </div>
            <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><div><TbBrandNextjs size={80} /></div></Magnetic>
                <h1>Next.js</h1>
              </div>
            </div>
            <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><div><FaReact size={80} /></div></Magnetic>
                <h1>React.Js</h1>
              </div>
            </div>
            <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><div><FaPython size={80} /></div></Magnetic>
                <h1>Python</h1>
              </div>
            </div>
            <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><div><FaNode size={80} /></div></Magnetic>
                <h1>Node.Js</h1>
              </div>
            </div>
            <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><div><FaPhp size={80} /></div></Magnetic>
                <h1>PHP</h1>
              </div>
            </div>
            <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><div><DiDjango size={80} /></div></Magnetic>
                <h1>Django</h1>
              </div>
              </div>
              <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><div><DiMongodb size={80} /></div></Magnetic>
                <h1>MongoDB</h1>
              </div>
            </div>
         </div>
        </div>
        </div>
    </section>
    </Element>
  );
};

export default Skills;
