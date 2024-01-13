"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./style.module.scss";
import Magnetic from "@/commons/Magnetic";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    setPath(progress);
  }, [])
  const setPath = (progress) => {
    const width = window.innerWidth;
    path.current.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`)
  }

  const lerp = (x, y, a) => x * (1 - a) + y * a

  const manageMouseEnter = () => {
    if(reqId){
      cancelAnimationFrame(reqId)
      resetAnimation()
    }
  }

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const pathBound =  path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress+= movementY
    setPath(progress);
  }

  const manageMouseLeave = () => {
    animateOut();
  }

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time+=0.2;
    setPath(newProgress);
    if(Math.abs(progress) > 0.75){
      reqId = requestAnimationFrame(animateOut);
    }
    else{
      resetAnimation();
    }
  }

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  }
  const heroSvg1 = useRef(null);
  const heroSvg2 = useRef(null);
  const heroSvg3 = useRef(null);
  const heroSvg4 = useRef(null);
  const heroSvg5 = useRef(null);
  const heroSvg6 = useRef(null);
  const heroSvg7 = useRef(null);
  const heroSvg8 = useRef(null);
  const heroSvg9 = useRef(null);
  const animateSvgs = (e) => {
    const speed1 = heroSvg1.current.getAttribute("data-speed");
    const speed2 = heroSvg2.current.getAttribute("data-speed");
    const speed3 = heroSvg3.current.getAttribute("data-speed");
    const speed4 = heroSvg4.current.getAttribute("data-speed");
    const speed5 = heroSvg5.current.getAttribute("data-speed");
    const speed6 = heroSvg6.current.getAttribute("data-speed");
    const speed7 = heroSvg7.current.getAttribute("data-speed");
    const speed8 = heroSvg8.current.getAttribute("data-speed");
    const speed9 = heroSvg9.current.getAttribute("data-speed");
    const x1 = (window.innerWidth - e.clientX * speed1) / 150;
    const y1 = (window.innerHeight - e.clientY * speed1) / 150;
    const x2 = (window.innerWidth - e.clientX * speed2) / 150;
    const y2 = (window.innerHeight - e.clientY * speed2) / 150;
    const x3 = (window.innerWidth - e.clientX * speed3) / 150;
    const y3 = (window.innerHeight - e.clientY * speed3) / 150;
    const x4 = (window.innerWidth - e.clientX * speed4) / 150;
    const y4 = (window.innerHeight - e.clientY * speed4) / 150;
    const x5 = (window.innerWidth - e.clientX * speed5) / 150;
    const y5 = (window.innerHeight - e.clientY * speed5) / 150;
    const x6 = (window.innerWidth - e.clientX * speed6) / 150;
    const y6 = (window.innerHeight - e.clientY * speed6) / 150;
    const x7 = (window.innerWidth - e.clientX * speed7) / 150;
    const y7 = (window.innerHeight - e.clientY * speed7) / 150;
    const x8 = (window.innerWidth - e.clientX * speed8) / 150;
    const y8 = (window.innerHeight - e.clientY * speed8) / 150;
    const x9 = (window.innerWidth - e.clientX * speed9) / 150;
    const y9 = (window.innerHeight - e.clientY * speed9) / 150;
    heroSvg1.current.style.transform = `translateX(${x1}px) translateY(${y1}px)`;
    heroSvg2.current.style.transform = `translateX(${x2}px) translateY(${y2}px)`;
    heroSvg3.current.style.transform = `translateX(${x3}px) translateY(${y3}px)`;
    heroSvg4.current.style.transform = `translateX(${x4}px) translateY(${y4}px)`;
    heroSvg5.current.style.transform = `translateX(${x5}px) translateY(${y5}px)`;
    heroSvg6.current.style.transform = `translateX(${x6}px) translateY(${y6}px)`;
    heroSvg7.current.style.transform = `translateX(${x7}px) translateY(${y7}px)`;
    heroSvg8.current.style.transform = `translateX(${x8}px) translateY(${y8}px)`;
    heroSvg9.current.style.transform = `translateX(${x9}px) translateY(${y9}px)`;
  };
  useEffect(() => {
    window.addEventListener("mousemove", (e) => animateSvgs(e));
  }, []);
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__wrapper}>
          <img
            ref={heroSvg1}
            data-speed="-7"
            src="/images/heroSvgs/1.svg"
            className={styles.herosvg}
          />
          <img
            ref={heroSvg2}
            data-speed="3"
            src="/images/heroSvgs/2.svg"
            className={styles.herosvg}
          />
          <img
            ref={heroSvg3}
            data-speed="5"
            src="/images/heroSvgs/3.svg"
            className={styles.herosvg}
          />
          <img
            ref={heroSvg4}
            data-speed="-1"
            src="/images/heroSvgs/4.svg"
            className={styles.herosvg}
          />
          <img
            ref={heroSvg5}
            data-speed="4"
            src="/images/heroSvgs/5.svg"
            className={styles.herosvg}
          />
          <img
            ref={heroSvg6}
            data-speed="-8"
            src="/images/heroSvgs/6.svg"
            className={styles.herosvg}
          />
          <img
            ref={heroSvg7}
            data-speed="6"
            src="/images/heroSvgs/7.svg"
            className={styles.herosvg}
          />
          <img
            ref={heroSvg8}
            data-speed="-2"
            src="/images/heroSvgs/8.svg"
            className={styles.herosvg}
          />
          <img
            ref={heroSvg9}
            data-speed="4"
            src="/images/heroSvgs/9.svg"
            className={styles.herosvg}
          />
          <div className={styles.hero__wrapper_text}>
            <h1>
              {`Hello I'am`} <span>{`Abdulaziz Toshpo'latov. Full-Stack`}</span>{" "}
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
          <div className={styles.hero__wrapper_image}>
            <Image
              src="/images/ap.png"
              alt="A guy"
              width={700}
              height={600}
            />
          </div>
        </div>
      </div>
        <div className={styles.line}>
              <div onMouseEnter={() => {manageMouseEnter()}} onMouseMove={(e) => {manageMouseMove(e)}} onMouseLeave={() => {manageMouseLeave()}} className={styles.box}></div>
              <svg>
                <path ref={path}></path>
              </svg>
            </div>
    </section>
  );
};

export default Hero;
