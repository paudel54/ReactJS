import React from "react";
import { Fade } from "react-reveal";

import buyIcon from "../../images/illustrations/buy.png";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
// import Select from "../../components/select";

export default function BuyAndTradeSection() {
  const formHandler = (e) => {
    e.preventDefault();
  };

  const inputChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex items-center">
          <div className="max-w-xl">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Buy & trade on the <br /> original crypto exchange.
            </h2>
            <p className="text-gray mb-6">
              Buy now and get 40% extra bonus Minimum pre-sale amount <br /> 25
              Crypto Coin. We accept BTC crypto-currency
            </p>

            <form onSubmit={formHandler}>
              <div className="flex justify-between gap-4 md:gap-6 mb-6">
                <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center">
                  <div className="border-r border-primary pr-4 md:pr-6">
                    <small className="text-primary">Amount</small>
                  </div>
                  <input
                    type="text"
                    value="5,000"
                    onChange={inputChangeHandler}
                    className="text-right outline-none w-full"
                  />
                </div>
                {/* <Select value="USD" /> */}
              </div>

              <div className="flex justify-between gap-4 md:gap-6 mb-6">
                <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full">
                  <div className="border-r border-primary pr-4 md:pr-6">
                    <small className="text-primary">Amount</small>
                  </div>
                  <input
                    type="text"
                    value="0.10901"
                    onChange={inputChangeHandler}
                    className="text-right outline-none w-full"
                  />
                </div>
                {/* <Select value="BTC" /> */}
              </div>
            </form>

            <PrimaryButton className="w-full">Buy Now</PrimaryButton>
          </div>
        </div>
        <div className="row-start-1 md:col-start-2">
          <Fade up>
            <img src={buyIcon} alt="" />
          </Fade>
        </div>
      </div>
    </section>
  );
}
