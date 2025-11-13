import NavBar from "@/components/Client/NavBar";
import Skills from "@/components/Client/SustainableRetreat";
import About from "@/sections/About";
import Footer from "@/sections/Footer/Server";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import ProjectShowcase from "@/components/Client/ProjectShowcase";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <About />
      <Skills />
      <ProjectShowcase />
      <Footer />
      <NavBar />
    </main>
  );
}
