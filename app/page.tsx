import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Properties } from "@/components/Properties";
import { Categories } from "@/components/Categories";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <Properties />
      <Projects />
      <About />
      <CTA />
      <Footer />
      <FloatingActions />
    </main>
  );
}
