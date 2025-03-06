"use client";
import HomeSection1 from "@/components/HomeSection1";
import HomeSection2 from "@/components/HomeSection2";
import HomeSection3 from "@/components/HomeSection3";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div>
      <HomeSection1 />
      <HomeSection3 />
      <HomeSection2 />
      <ContactSection />
    </div>
  );
}
