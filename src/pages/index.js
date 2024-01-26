import React from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Navbar from "@/components/Navbar";
import Schedule from "@/components/Schedule";
import Climb from "@/components/Climb";

const index = () => {
  return (
    <div>
      <Hero />
      <Navbar text={true} />
      <History />
      <Climb />
      <Schedule />
      <Footer />
    </div>
  );
};

export default index;
