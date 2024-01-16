import { About } from "@/components/About";
import Experiences from "@/components/Experiences";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
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
