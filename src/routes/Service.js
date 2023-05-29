import Hero from "../components/Hero";
import ServiceImg from "../assets/1.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import React from "react";
import Navbar from "../components/Navbar";
function Service() {
  return (
    <>
    <Navbar/>
       <Hero 
      cName="hero-about"
      heroImg={ServiceImg}
      title="We are providing best service"
      btnclass="hide" />
      <Trip/>
      <Footer/>
    </>

  );
}

export default Service;
