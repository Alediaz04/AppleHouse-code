import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Stock from "@/components/Stock";
import Service from "@/components/Service";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import Reviews from "@/components/Reviews";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Reviews />
        <Stock />
        <Service />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
