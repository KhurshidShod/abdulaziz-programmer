"use client";

import Image from "next/image";
import "./style.css";
import { useEffect, useState } from "react";

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
      <Image src={"/images/loader.svg"} alt="loader" width={200} height={160} />
    </div>
  );
};

export default Loader;
