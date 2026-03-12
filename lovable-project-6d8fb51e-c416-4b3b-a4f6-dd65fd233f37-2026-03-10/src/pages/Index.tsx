import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Solution from "@/components/Solution";
import Capabilities from "@/components/Capabilities";
import Shift from "@/components/Shift";
import Trust from "@/components/Trust";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      
      <Solution />
      <Capabilities />
      <Shift />
      <Trust />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default Index;
