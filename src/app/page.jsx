<<<<<<< HEAD
import { About } from "@/components/About";
import Experiences from "@/components/Experiences";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
=======
"use client";
import { useEffect } from 'react'
import Experiences from '@/components/Experiences'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
>>>>>>> 84da75ef4d859be77059513ab6af88f6a298faf4

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Experiences />
      <About />
    </>
  );
}
