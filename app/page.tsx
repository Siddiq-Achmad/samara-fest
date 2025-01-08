import { AboutSection } from "@/components/sections/about";
import GallerySection from "@/components/sections/gallery";
import { HeroSection } from "@/components/sections/hero";
import { MediaPartnerSection } from "@/components/sections/mediapartner";
import { TalkshowsSection } from "@/components/sections/talkshows";
import { VendorsSection } from "@/components/sections/vendors";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="absolute inset-0 -z-10 h-full  w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#FF5A00_80%)]"></div>
      <HeroSection />

      <AboutSection />

      <MediaPartnerSection />

      <TalkshowsSection />

      <GallerySection />

      <VendorsSection />
    </div>
  );
}
