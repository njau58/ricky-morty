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
import Statistics from '../sections/statistics/Statistics'

import ScrollToTop from "../utils/ScrollToTop";
import { motion, useScroll } from "framer-motion";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"], weight: "300" });

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Head>
        <title>Nester Solar-Solar energy solutions</title>
        <meta
          name="description"
          content="Provider of solar energy solutions in East Africa.
    "
        ></meta>
        <meta name="keywords" content="nester, solar power, lighting, kenya" />
      </Head>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 z-50 bg-primary origin-[0%]  "
        style={{ scaleX: scrollYProgress }}
      />
      <div className={`h-screen  ${inter.className}`}>
        <ScrollToTop />

        <NavBar />
        <Hero />
        <Features />
        <About />
        <Specialization />
        <Services />
        {/* <Products /> */}
        <CTA />
        <Statistics/>
        <Projects />
        <ContactUs />
        <Footer />
      </div>
      {/* <ExpiredReview/> */}
    </>
  );
}
