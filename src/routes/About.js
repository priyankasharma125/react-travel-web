

import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
function About() {
  return (
    <>
    <Navbar/>
      <Hero 
      cName="hero-about"
      heroImg={AboutImg}
      title="Opportunity for exploring"
      btnclass="hide" />
      <AboutUs />
      <Footer/>
    </>
  );
}

export default About;
