import { Hero } from "@/components/Hero";
import { Properties } from "@/components/Properties";
import { Categories } from "@/components/Categories";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { FloatingActions } from "@/components/FloatingActions";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Categories />
      <Properties />
      <About />
      <CTA />
      <FloatingActions />
    </main>
  );
}
