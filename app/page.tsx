import Image from "next/image";

import HeroSection from "./home/Hero";
import PartnerSection from "./home/Partner";
import FeaturesSection from "./home/Features";
import ContactSection from "./home/Contacts";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <PartnerSection />
      <FeaturesSection />
      <ContactSection />
    </div>
  );
}