import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import React from "react";
import ContactForm from "../components/ContactForm";
function Contact() {
  return (
    <>
    <Navbar/>
      <Hero 
      cName="hero-about"
      heroImg={AboutImg}
      title="Contact Us For Explore"
      btnclass="hide" />
      <ContactForm/>
      <Footer />
    </>
  );
}

export default Contact;
