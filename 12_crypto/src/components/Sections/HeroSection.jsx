import React from "react";
import globalCrypto from "../../images/illustrations/globe.png";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import { BsChevronDown } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section className="bg-primary bg-opacity-5">
      <div className="container mx-auto grid grid-cols-2">
        <div className="flex items-center">
          <div>
            <p className="text-primary text-lg">SIGN UP TODAY</p>
            <h1 className="text-6xl font-bold leading-normal">The World's</h1>
            <h1 className="text-6xl font-bold leading-normal">
              Fastest Growing
            </h1>
            <h1 className="text-6xl font-bold leading-normal">
              Crypto Web App
            </h1>
            <p className="text-gray mt-4 mb-8">
              Buy and Sell 200+ cryptocurrencies with 20+ flat currencies using
              bank transfers of your credit/debit card.
            </p>
            <div className="flex">
              <PrimaryButton className="mr-4">Get Started</PrimaryButton>
              <SecondaryButton>
                Download App
                <BsChevronDown className="inline ml-2" />
              </SecondaryButton>
            </div>
          </div>
        </div>
        <div>
          <img src={globalCrypto} alt="icon" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
