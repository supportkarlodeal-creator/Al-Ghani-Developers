import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectTabs from "@/components/ProjectTabs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import OfficeLocations from "@/components/OfficeLocations";
import FeaturedProjects from "@/components/FeaturedProjects";
import OliveBlockPromo from "@/components/OliveBlockPromo";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <OliveBlockPromo/>

        <AboutSection />

        <ProjectTabs />

        <FeaturedProjects/>
      
        <OfficeLocations/>

        <ContactSection />
      </main>

      <FloatingActions />

      <Footer />
    </>
  );
}
