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

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className="container">
        <div className={styles.skills__wrapper}>
          <h1>
            <svg
              width="128"
              height="48"
              viewBox="0 0 128 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Frame" clip-path="url(#clip0_6_1392)">
                <path
                  id="Vector"
                  d="M0.0400038 22.3C2.59 29.13 5.48 36.04 11.71 40.32C17.28 44.14 24.24 45.37 30.88 44.84C38.11 44.26 45.02 41.25 50.89 37.07C53.91 34.92 56.7 32.48 59.29 29.83C60.57 28.51 61.81 27.14 63 25.74C64.19 24.34 65.4 22.92 66.04 21.18C66.58 19.69 66.51 17.95 65.61 16.62C64.66 15.21 62.93 14.77 61.31 14.88C57.65 15.13 54.09 17.58 51.52 20.07C46.54 24.88 43.03 33.04 46.44 39.7C49.85 46.36 58.12 48.31 65.12 47.67C72.12 47.03 79.83 44.34 86.41 41.15C98.9 35.1 109.83 25.82 117.54 14.25C118.5 12.82 119.39 11.35 120.23 9.85003C121.2 8.13003 117.02 8.58003 116.33 9.76003C110.22 20.26 101.77 29.2 91.46 35.67C86.37 38.86 80.89 41.46 75.16 43.25C68.98 45.19 61.91 46.79 55.86 43.61C53.14 42.18 50.88 39.85 49.92 36.89C48.96 33.93 49.27 30.45 50.41 27.44C51.55 24.43 53.46 21.87 55.84 19.84C56.86 18.97 57.99 18.18 59.2 17.59C59.76 17.32 60.27 17.05 60.86 17.35C61.56 17.7 61.93 18.48 62.1 19.21C62.79 22.23 59.7 25.01 57.88 27.04C55.69 29.48 53.34 31.78 50.81 33.87C46.17 37.7 40.73 40.88 34.77 42.08C28.52 43.34 21.73 42.4 16.25 39.1C9.69 35.16 6.73 28.06 4.14 21.22C3.6 19.8 -0.439996 20.99 0.0500038 22.32H0.0400038V22.3Z"
                  fill="black"
                />
                <path
                  id="Vector_2"
                  d="M106.39 15.57L116.23 8.38002L120.97 4.92002C122.29 3.96002 123.69 2.60002 125.33 2.26002L123.09 2.03002C124.07 3.51002 123.79 5.58002 123.68 7.25002C123.55 9.14002 123.34 11.03 123.14 12.92C122.74 16.71 122.24 20.71 122.92 24.5C123.18 25.93 127.09 24.88 127.01 23.4C126.78 19.24 127.07 15.21 127.51 11.08C127.72 9.05002 127.94 7.02001 128 4.97002C128.05 3.30001 127.96 1.80002 127.02 0.370015C126.62 -0.229985 125.32 0.0300151 124.78 0.140015C122.75 0.560015 121.07 1.68002 119.42 2.89002C117.6 4.22002 115.78 5.55002 113.95 6.88002L103.02 14.87C102.27 15.42 102.65 16.17 103.42 16.36C104.45 16.61 105.58 16.16 106.4 15.56L106.39 15.57Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_1392">
                  <rect width="128.01" height="47.78" fill="white" />
                </clipPath>
              </defs>
            </svg>
            My <span>Skills</span>
            <svg
              width="71"
              height="77"
              viewBox="0 0 71 77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Frame" clip-path="url(#clip0_6_3852)">
                <path
                  id="Vector"
                  d="M4.09013 26.93L12.4101 14.07L16.4401 7.84999C17.8601 5.65999 19.4501 3.50999 20.6801 1.20999C21.1301 0.379988 20.2901 0.0299881 19.5701 -1.18683e-05C18.6301 -0.0400119 17.4401 0.349988 16.8601 1.11999C15.2701 3.21999 13.9401 5.54999 12.5101 7.75999L8.48012 13.98L0.150125 26.84C-0.389875 27.67 0.620125 28.05 1.30013 28.08C2.21012 28.12 3.56013 27.74 4.09013 26.92V26.93Z"
                  fill="black"
                />
                <path
                  id="Vector_2"
                  d="M20.0398 40.99C36.4298 35.62 52.8798 30.4 69.2098 24.84C69.7798 24.65 71.1598 24.16 70.9398 23.31C70.7198 22.5 69.2198 22.68 68.6798 22.85C52.2298 28.03 35.8798 33.54 19.4898 38.92C18.8898 39.12 17.4498 39.63 17.6898 40.52C17.9098 41.36 19.4898 41.19 20.0498 41L20.0398 40.99Z"
                  fill="black"
                />
                <path
                  id="Vector_3"
                  d="M16.7 59.74L29.47 67.89L35.75 71.9C37.91 73.28 40.04 74.79 42.29 76.01C43.06 76.42 44.25 76.11 44.96 75.74C45.33 75.55 46.5 74.73 45.82 74.22C43.76 72.67 41.49 71.37 39.32 69.99L33.04 65.98L20.06 57.69C18.9 56.95 14.99 58.65 16.69 59.74H16.7Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_3852">
                  <rect width="70.96" height="76.21" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </h1>
          <div className={styles.skills__wrapper_cards}>
            <svg
              width="36"
              height="35"
              viewBox="0 0 36 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Frame" clip-path="url(#clip0_6_3942)">
                <path
                  id="Vector"
                  d="M2.40996 5.16999L29.88 33.01C30.83 33.97 34.49 32.53 33.47 31.5L5.98996 3.65999C5.03996 2.69999 1.37996 4.13999 2.39996 5.16999H2.40996Z"
                  fill="black"
                />
                <path
                  id="Vector_2"
                  d="M5.27008 33.3C14.8601 24.18 24.3601 14.98 33.7901 5.69001C34.3701 5.12001 34.2101 4.53001 33.4201 4.32001C32.6301 4.11001 31.3001 4.45001 30.6901 5.05001C21.2701 14.34 11.7601 23.55 2.17008 32.67C1.58008 33.24 1.76008 33.83 2.54008 34.04C3.38008 34.26 4.64008 33.91 5.27008 33.31V33.3Z"
                  fill="black"
                />
                <path
                  id="Vector_3"
                  d="M1.17012 20.07C11.8101 20.14 22.4501 20.17 33.0901 20.19C33.9201 20.19 35.1901 19.92 35.6401 19.14C36.0901 18.36 35.2601 18 34.5901 18C23.9501 17.99 13.3101 17.95 2.67012 17.88C1.85012 17.88 0.570122 18.15 0.120122 18.93C-0.329878 19.71 0.500122 20.06 1.17012 20.07Z"
                  fill="black"
                />
                <path
                  id="Vector_4"
                  d="M20.16 33.48C20.39 22.62 20.52 11.75 20.56 0.889989C20.56 -0.710011 16.7 0.109989 16.7 1.36999C16.67 12.24 16.53 23.1 16.3 33.96C16.27 35.55 20.14 34.75 20.16 33.48Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_3942">
                  <rect width="35.77" height="34.85" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Frame" clip-path="url(#clip0_6_3931)">
                <path
                  id="Vector"
                  d="M4.03999 9.36C5.74999 6.64 7.44999 3.92 9.12999 1.18C9.61999 0.4 8.71999 0 8.03999 0C7.15999 0 5.89999 0.3 5.37999 1.1C3.61999 3.82 1.87999 6.54 0.14999 9.27C-0.36001 10.08 0.59999 10.5 1.27999 10.5C2.17999 10.5 3.51999 10.19 4.03999 9.36Z"
                  fill="black"
                />
                <path
                  id="Vector_2"
                  d="M8.91001 13.37C11.63 12.15 14.34 10.92 17.05 9.67998C17.55 9.44998 18.72 8.74998 18.11 8.07998C17.5 7.40998 16.12 7.75998 15.47 8.03998C12.73 9.23998 10 10.45 7.26001 11.67C6.87001 11.84 6.39001 12.11 6.15001 12.48C5.99001 12.73 5.91001 13.1 6.15001 13.33C6.81001 13.96 8.17001 13.7 8.89001 13.37H8.91001Z"
                  fill="black"
                />
                <path
                  id="Vector_3"
                  d="M12.34 21.42C14.49 21.2 16.65 20.98 18.8 20.75C19.31 20.69 19.88 20.51 20.31 20.24C20.57 20.08 21.02 19.74 21.07 19.4C21.19 18.5 19.92 18.49 19.34 18.54C17.19 18.73 15.04 18.94 12.89 19.16C12.37 19.21 11.78 19.41 11.34 19.69C11.08 19.85 10.61 20.2 10.56 20.56C10.44 21.48 11.74 21.5 12.33 21.44L12.34 21.42Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_3931">
                  <rect width="21.08" height="21.44" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><FaGitAlt size={80} /></Magnetic>
                <h1>Git</h1>
              </div>
            </div>
            <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><RiJavascriptFill size={80} /></Magnetic>
                <h1>Javascript</h1>
              </div>
            </div>
            <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><BiLogoTypescript size={80} /></Magnetic>
                <h1>Typescript</h1>
              </div>
            </div>
            <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><TbBrandNextjs size={80} /></Magnetic>
                <h1>Next.js</h1>
              </div>
            </div>
            <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><FaReact size={80} /></Magnetic>
                <h1>React.Js</h1>
              </div>
            </div>
            <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><FaPython size={80} /></Magnetic>
                <h1>Python</h1>
              </div>
            </div>
            <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><FaNode size={80} /></Magnetic>
                <h1>Node.Js</h1>
              </div>
            </div>
            <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><FaPhp size={80} /></Magnetic>
                <h1>PHP</h1>
              </div>
            </div>
            <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><DiDjango size={80} /></Magnetic>
                <h1>Django</h1>
              </div>
            </div>
            <div className={styles.skills__wrapper_cards_card}>
              <div className={styles.skills__wrapper_cards_card_outer}></div>
              <div className={styles.skills__wrapper_cards_card_outer2}></div>
              <div className={styles.skills__wrapper_cards_card_content}>
                <Magnetic><DiMongodb size={80} /></Magnetic>
                <h1>MongoDB</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
