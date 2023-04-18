import React from "react";
import ListCoin from "../ListCoin/ListCoin";

const trendingCoins = [
  {
    image: "cryptocurrencies/etherium.png",
    name: "Etherium",
    price: "$1,198.09",
    uptrend: false,
  },
  {
    image: "cryptocurrencies/bitcoin.png",
    name: "Bitcoin",
    price: "$23,981,.98",
    uptrend: true,
  },
  {
    image: "cryptocurrencies/doge.png",
    name: "Dogecoin",
    price: "$42.87",
    uptrend: true,
  },
  {
    image: "cryptocurrencies/solana.png",
    name: "Solana",
    price: "$0.0023",
    uptrend: false,
  },
];
const gainerCoins = [
  {
    image: "/cryptocurrencies/pappay.png",
    name: "PAPPAY",
    price: "$0.00374",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/bitcoinasia.png",
    name: "Bitcoin Asia",
    price: "$0.02096",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/moonrock.png",
    name: "Moon Rock",
    price: "$0.004907",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/ninjafloki.png",
    name: "Ninja Floki",
    price: "$0.000123",
    uptrend: true,
  },
];
const recentlyCoins = [
  {
    image: "/cryptocurrencies/metacraft.png",
    name: "Metacraft",
    price: "$0.0608",
    uptrend: false,
  },
  {
    image: "/cryptocurrencies/frog.png",
    name: "Frog",
    price: "$0.5875",
    uptrend: false,
  },
  {
    image: "/cryptocurrencies/muskdoge.png",
    name: "Musk Doge",
    price: "$0.04041",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/2share.png",
    name: "2 Share",
    price: "$1,366.24",
    uptrend: true,
  },
];

const CryptoCurrency = () => {
  return (
    <section className="-mt-10">
      <div className="container rounded-3xl bg-white py-8 px-4 shadow mx-auto">
        <div className="grid grid-cols-3">
          <div className="px-4">
            <ListCoin title="🔥 Trending" data={trendingCoins} />
          </div>
          <div className="px-4">
            <ListCoin title="🚀 Top Gainers" data={gainerCoins} />
          </div>
          <div className="px-4">
            <ListCoin title="🆕 Recently Added" data={recentlyCoins} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoCurrency;
