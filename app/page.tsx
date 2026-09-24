import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectTabs from "@/components/ProjectTabs";
//import FeaturedProjects from "@/components/FeaturedProjects";//
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import OfficeLocations from "@/components/OfficeLocations";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <AboutSection />

        <ProjectTabs />

        <FeaturedProjects />
        
        <OfficeLocations/>

        <ContactSection />
      </main>

      <FloatingActions />

      <Footer />
    </>
  );
}
