"use client";
import HomeSection1 from "@/components/HomeSection1";
import HomeSection2 from "@/components/AboutMe";
import HomeSection3 from "@/components/WorkExperience";
import ContactSection from "@/components/ContactSection";
import Projects from "@/components/Projects";
import AIAssistant from "@/AI_Services/AIAssistant";

export default function Home() {
  return (
    <div>
      <AIAssistant />
      <HomeSection1 />
      <HomeSection3 />
      <Projects />
      <HomeSection2 />
      <ContactSection />
    </div>
  );
}
