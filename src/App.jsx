import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import CoNtAcT from "./components/Contact/CoNtAcT";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our Program" title="What We Offer" />
        <Programs />
        <About />
        <Title subtitle="Gallery " title="Campus Photos" />
        <Campus />
        <Title subtitle="Testimonial " title="What Our Students Say" />
        <Testimonials />
        <Title subtitle="Contact Us" title="Get In Touch" />
        <CoNtAcT />
        <Footer />
      </div>
    </div>
  );
}

export default App;
