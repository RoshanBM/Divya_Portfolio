import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Marquee, About, WhatIDo } from "@/components/sections";
import { Work } from "@/components/work";
import { Experience, Education } from "@/components/experience-education";
import { Skills } from "@/components/skills";
import { Contact, Footer } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <WhatIDo />
        <Work />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
