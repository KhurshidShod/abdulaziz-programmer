"use client";
import { useEffect } from 'react'
import Experiences from '@/components/Experiences'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'

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
    </>
  )
}
