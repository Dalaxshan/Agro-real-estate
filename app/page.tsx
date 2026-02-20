import { Hero } from "@/components/Hero";
import { Properties } from "@/components/Properties";
import { Categories } from "@/components/Categories";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { FloatingActions } from "@/components/FloatingActions";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Categories />
      <Properties />
      <Projects />
      <About />
      <CTA />
      <FloatingActions />
    </main>
  );
}
