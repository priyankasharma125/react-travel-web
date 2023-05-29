import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Trip from "../components/Trip";
import React from "react";
import HeroImg from '../assets/12.jpg';
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
    <Navbar/>
     <Hero  
     cName="hero"
     heroImg={HeroImg}
     title="Your Journey Begins From Here"
     text="Choose your destination and start exploring with us"
     btntext="Plan Travelling"
     url='/'
     btnclass='btn'
     />
     <Destination />
     <Trip />
<Footer/>
    </>
  );
}

export default Home;
