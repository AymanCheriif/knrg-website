import Hero from "@/components/sections/Hero";
import DrinksSection from "@/components/sections/DrinksSection";
import BoosterSection from "@/components/sections/BoosterSection";
import StickerSection from "@/components/sections/StickerSection";
import ScienceSection from "@/components/sections/ScienceSection";
import DropsSection from "@/components/sections/DropsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <DrinksSection />
      <BoosterSection />
      <StickerSection />
      <ScienceSection />
      <DropsSection />
    </main>
  );
}
