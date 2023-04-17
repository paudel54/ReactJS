import React from "react";
import Layout from "../components/Layout/Layout";
import HeroSection from "../components/Sections/HeroSection";
import CryptoCurrency from "../components/Sections/CryptoCurrency";
import Footer from "../components/Footer/Footer";

const index = () => {
  return (
    <Layout>
      <HeroSection />
      <CryptoCurrency />
      <Footer />
    </Layout>
  );
};

export default index;
