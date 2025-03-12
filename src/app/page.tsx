"use client";
import HomeSection1 from "@/components/HomeSection1";
import HomeSection2 from "@/components/AboutMe";
import HomeSection3 from "@/components/WorkExperience";
import ContactSection from "@/components/ContactSection";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <HomeSection1 />
      <HomeSection3 />
      <HomeSection2 />
      <Projects/>
      <ContactSection />
    </div>
  );
}
