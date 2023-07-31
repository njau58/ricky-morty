import { Inter, Poppins } from "next/font/google";
import NavBar from "../components/navbar/NavBar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Features from "../sections/Features/Features";
import Specialization from "../sections/specialization/Specialization";
import Services from "../sections/services/Services";
import Products from "../sections/products/Products";
import CTA from "../sections/CTA";
import Projects from "../sections/Projects";
import ContactUs from "../sections/ContactUs";
import Footer from "../sections/Footer";

import ScrollToTop from "../components/ScrollToTop";
import { motion, useScroll } from "framer-motion";



const inter = Inter({ subsets: ["latin"], weight: "300" });

export default function Home() {
  
    const { scrollYProgress } = useScroll();
  return (<>
    <motion.div
    className="fixed top-0 left-0 right-0 h-0.5 z-50 bg-primary origin-[0%]  "
    style={{ scaleX: scrollYProgress }}
  />
    <div className={`h-screen  ${inter.className}`}>
       
      <ScrollToTop/>
      <NavBar />
      <Hero />
      <Features />
      <About />
      <Specialization />
      <Services />
      <Products />
      <CTA />
      <Projects/>
      <ContactUs/>
      <Footer/>
    </div></>
  );
}
