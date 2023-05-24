import React from "react";
import Layout from "../components/Layout/Layout";
import HeroSection from "../components/Sections/HeroSection";
import CryptoCurrency from "../components/Sections/CryptoCurrency";
import Footer from "../components/Footer/Footer";
import BuyAndTrade from "../components/Sections/BuyAndTrade";

const index = () => {
  return (
    <Layout>
      <HeroSection />
      <CryptoCurrency />
      <BuyAndTrade />
      <Footer />
    </Layout>
  );
};

export default index;
