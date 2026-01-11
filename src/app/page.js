import Hero from "@/components/Hero/Hero";
import Destinations from "@/components/Destinations/Destinations";
import About from "@/components/About/About";
import PrivateHire from "@/components/PrivateHire/PrivateHire";
import Story from "@/components/Story/Story";
import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Destinations />
      <About />
      <PrivateHire/>
      <Story/>
      <Newsletter />
      <Footer />
    </>
  );
}
