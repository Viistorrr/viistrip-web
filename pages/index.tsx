import React from "react";
import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { Testimonials } from "../components/Testimonials";
import { Tours } from "../components/Tours";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Tours />
      <Features />
      <Testimonials />
    </>
  );
};

export default HomePage;
