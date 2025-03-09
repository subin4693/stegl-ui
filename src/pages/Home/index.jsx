import React from "react";
import Banner from "./Banner";
import Navbar from "@/components/Navbar";
import Aboutus from "./Aboutus";
import JoinWithUs from "./JoinWithUs";
import ContactUs from "./Contactus";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Aboutus />
      <JoinWithUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
