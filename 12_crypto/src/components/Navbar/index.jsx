import React from "react";
import Logo from "../../images/logo.svg";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import { BsChevronDown } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className="bg-primary bg-opacity-5">
      <div className="sticky container mx-auto top-0 py-8 flex items-center justify-between">
        <div>
          <div className="flex mr-6 items-center">
            <img src={Logo} className="mr-6" alt="logo" />
            <div className="flex">
              <a className="mx-6 hover:text-primary " href="#/">
                Cryptocurrency
              </a>
              <a className="mx-6 hover:text-primary " href="#/">
                Exchanges
              </a>
              <a className="mx-6 hover:text-primary " href="#/">
                Watchlist
              </a>
              <a className="mx-6 hover:text-primary " href="#/">
                NFT
              </a>
              <a className="mx-6 hover:text-primary " href="#/">
                Portfolio
              </a>
              <a className="mx-6 hover:text-primary " href="#/">
                Product
                <BsChevronDown className="inline ml-2" />
              </a>
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex">
          <SecondaryButton className="mr-4">Sign In</SecondaryButton>
          <PrimaryButton>Sign Up</PrimaryButton>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
