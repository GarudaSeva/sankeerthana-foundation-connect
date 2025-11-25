import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import News from "@/components/News";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Donate from "@/components/Donate";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <News />
        <Team />
        <Donate/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
