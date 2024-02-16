import React from "react";
import Navbar from "@/components/navbar";
import { Jost } from "next/font/google";

import Head from "next/head";

const inter = Jost({ subsets: ["latin"], weight: "400" });

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Ricky & Morty</title>
        <meta name="description"></meta>
      </Head>

      <div className={`h-screen  gray  ${inter.className}`}>
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
