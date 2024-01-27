"use client";
import { useState, useEffect } from "react";
import Experiences from "@/components/Experiences";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Statistics from "@/components/Statistics";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
    window.addEventListener("load", () => setLoading(false))
  }, []);
  return (
    <>
      {loading ? null : <Loader />}
      <Header />
      <Hero />
      <Skills />
      <Experiences />
      <About />
      <Projects />
      <Statistics />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
