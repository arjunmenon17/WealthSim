import "../../App.css";
import React from "react";
import Heroes from "../Heroes";
import StockCard from "../StockCard";
import "./Home.css";

function Home() {
  return (
    <>
      <Heroes></Heroes>
      <div className="stocks">
        <StockCard ticker="NASDAQ:MSFT" id="tradingview_cbdf7" />
      </div>
    </>
  );
}

export default Home;
