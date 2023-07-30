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



const inter = Inter({ subsets: ["latin"], weight: "300" });

export default function Home() {
  return (
    
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
    </div>
  );
}
