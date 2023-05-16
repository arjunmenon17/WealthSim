import "../../App.css";
import React from "react";

import CardSection from "../../components/CardSection";

function About() {
  return (
    <>
      <CardSection></CardSection>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginInline: "150px",
          marginBottom: "70px",
        }}
      >
        <p
          style={{
            color: "white",
            textAlign: "center",
            maxWidth: "75%",
            padding: "20px",
            paddingRight: "50px",
            lineHeight: "24px",
          }}
        >
          At Wealth Sim, we believe that gaining practical experience in stock
          trading is essential for anyone looking to navigate the complexities
          of the financial markets. That's why we developed this app that allows
          you to trade live stocks with virtual currency. We understand that
          learning about stock trading can be intimidating, and the fear of
          making costly mistakes can deter many individuals from taking the
          first step. Our app provides a risk-free environment where you can
          explore the world of stock trading without any financial consequences.
        </p>
        <img
          style={{ width: "55%", height: "auto" }}
          src="./src/assets/invest.gif"
          alt="Invest Gif"
        />
      </div>
    </>
  );
}

export default About;
