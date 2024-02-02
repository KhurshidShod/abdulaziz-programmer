"use client";

import Image from "next/image";
import "./style.css";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  console.log(Date.now());

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  }, []);
  return (
    <div className={`loader ${isVisible ? "visible" : "hidden"}`}>
      <TypeAnimation
        sequence={[
          "Hello, Welcome to ABDULAZIZ-PROGRAMMER.UZ",
          1000,
          "Loading...",
          3000,
        ]}
        wrapper="span"
        speed={70}
        repeat={Infinity}
      />
    </div>
  );
};

export default Loader;
