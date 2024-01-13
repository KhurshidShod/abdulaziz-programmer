"use client";
import { useRef, useState } from "react";
import Magnetic from "@/commons/Magnetic";
import styles from "./style.module.scss";
import { BsMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

const Header = () => {
    const [themeDark, setThemeDark] = useState(false);
  const sliderRef = useRef(null);

  const sliderMouseOver = (e) => {
    const left = e.currentTarget.offsetLeft;
    const width = e.currentTarget.getBoundingClientRect().width;
    sliderRef.current.style.left = `${left + width / 2}px`;
    sliderRef.current.style.width = `${width}px`;
  };
  const sliderMouseLeave = (e) => {
    sliderRef.current.style.left = `15px`;
    sliderRef.current.style.width = `50px`;
    sliderRef.current.style.height = `3px`;
    sliderRef.current.style.borderRadius = `15px`;
  };
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div ref={sliderRef} className={styles.indicator}></div>
          <div className={styles.nav__logo}>
            <h1>AP</h1>
          </div>
          <ul>
            <li>
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  About Me
                </li>
              </Magnetic>
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Skills
                </li>
              </Magnetic>
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Projects
                </li>
              </Magnetic>
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Courses
                </li>
              </Magnetic>
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Contact Me
                </li>
              </Magnetic>
            </li>
          </ul>
          <div className={styles.nav__actions}>
          <Magnetic>
            <button onMouseEnter={(e) => {
                const left = e.currentTarget.offsetLeft;
                const width = e.currentTarget.getBoundingClientRect().width;
                sliderRef.current.style.left = `${left + width / 2}px`;
                sliderRef.current.style.width = `5px`;
                sliderRef.current.style.height = `5px`;
                sliderRef.current.style.borderRadius = `50%`;
            }} onMouseLeave={(e) => {
                sliderRef.current.style.left = `15px`;
                sliderRef.current.style.width = `50px`;
                sliderRef.current.style.height = `3px`;
                sliderRef.current.style.borderRadius = `15px`;
              }} onClick={() => {
                document.body.classList.toggle("dark");
                setThemeDark(!themeDark)
            }}>{themeDark ? <FaSun size={20} /> : <BsMoonFill size={20} />}</button>
            </Magnetic>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
