import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CollectionsSection from "@/components/CollectionsSection";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <CollectionsSection />
        <CraftsmanshipSection />
         <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
