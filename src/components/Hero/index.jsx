"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./style.module.scss";
import Magnetic from "@/commons/Magnetic";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Element } from "react-scroll";

const Hero = () => {
  const heroSvg1 = useRef(null);
  const heroSvg2 = useRef(null);
  const heroSvg3 = useRef(null);
  const animateSvgs = (e) => {
    const speed1 = heroSvg1.current.getAttribute("data-speed");
    const speed2 = heroSvg2.current.getAttribute("data-speed");
    const speed3 = heroSvg3.current.getAttribute("data-speed");
    const x1 = (window.innerWidth - e.clientX * speed1) / 150;
    const y1 = (window.innerHeight - e.clientY * speed1) / 150;
    const x2 = (window.innerWidth - e.clientX * speed2) / 150;
    const y2 = (window.innerHeight - e.clientY * speed2) / 150;
    const x3 = (window.innerWidth - e.clientX * speed3) / 150;
    const y3 = (window.innerHeight - e.clientY * speed3) / 150;
    heroSvg1.current.style.transform = `translateX(${x1}px) translateY(${y1}px)`;
    heroSvg2.current.style.transform = `translateX(${x2}px) translateY(${y2}px)`;
    heroSvg3.current.style.transform = `translateX(${x3}px) translateY(${y3}px)`;
  };
  useEffect(() => {
    window.addEventListener("mousemove", (e) => animateSvgs(e));
  }, []);
  return (
    <Element name="hero">
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.hero__wrapper}>
            <img
              ref={heroSvg1}
              data-speed="-7"
              src="/images/heroSvgs/7.svg"
              className={styles.herosvg}
            />
            <img
              ref={heroSvg2}
              data-speed="5"
              src="/images/heroSvgs/3.svg"
              className={styles.herosvg}
            />
            <img
              ref={heroSvg3}
              data-speed="-8"
              src="/images/heroSvgs/6.svg"
              className={styles.herosvg}
            />
            <div
              className={styles.hero__wrapper_text}
              data-scroll
              data-scroll-speed="0.3"
            >
              <h1>
                {`Hello I'am`}{" "}
                <span>{`Abdulaziz Toshpo'latov. Full-Stack`}</span>{" "}
                <span>Developer</span> based in <span>Tashkent</span>
              </h1>
              <p>
                {`I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book.`}
              </p>
              <div className={styles.hero__wrapper_text_socials}>
                <Magnetic>
                  <button className={styles.hero__wrapper_text_socials_social}>
                    <Magnetic>
                      <span>
                        <AiFillInstagram />
                      </span>
                    </Magnetic>
                  </button>
                </Magnetic>
                <Magnetic>
                  <button className={styles.hero__wrapper_text_socials_social}>
                    <Magnetic>
                      <span>
                        <FaTelegram />
                      </span>
                    </Magnetic>
                  </button>
                </Magnetic>
                <Magnetic>
                  <button className={styles.hero__wrapper_text_socials_social}>
                    <Magnetic>
                      <span>
                        <FaYoutube />
                      </span>
                    </Magnetic>
                  </button>
                </Magnetic>
                <Magnetic>
                  <button className={styles.hero__wrapper_text_socials_social}>
                    <Magnetic>
                      <span>
                        <FaLinkedin />
                      </span>
                    </Magnetic>
                  </button>
                </Magnetic>
              </div>
            </div>
            <div
              className={styles.hero__wrapper_image}
              data-scroll
              data-scroll-speed="0.3"
            >
              <Image
                src="/images/ap.png"
                alt="A guy"
                width={700}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
