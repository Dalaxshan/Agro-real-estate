import HeroBanner from "@/components/HeroBanner";
import AboutIntro from "@/components/AboutIntro";
import StatsCounter from "@/components/StatsCounter";
import OurMission from "@/components/OurMission";
import Services from "@/components/Services";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroBanner />
      <AboutIntro />
      <StatsCounter />
      <OurMission />
      <Services />
      <TeamSection />
      <Testimonials />
      <CallToAction />
    </main> 
  );
}