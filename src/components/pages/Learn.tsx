import React from "react";
import { Grid } from "@nextui-org/react";
import Card4 from "../../components/LearnCard";

function Learn() {
  return (
    <div className="cards">
      <h1
        style={{
          marginBottom: "15px",
        }}
      >
        Check out these resources:
      </h1>
      <Grid.Container gap={3} justify="center">
        <Grid xs={12} sm={3.34}>
          <Card4
            url="https://www.investopedia.com/articles/basics/06/invest1000.asp"
            label="Article"
            main="Basics of Investing"
            description="Learn to invest."
            src="./src/assets/investingBasics.jpg"
            buttonTxt="Read Now"
          ></Card4>
        </Grid>
        <Grid xs={12} sm={3.34}>
          <Card4
            url="https://www.nerdwallet.com/article/investing/choosing-the-best-online-broker"
            label="Article"
            main="Choosing a Broker"
            description="How to choose a broker."
            src="./src/assets/btc.jpg"
            buttonTxt="Read Now"
          ></Card4>
        </Grid>
        <Grid xs={12} sm={3.34}>
          <Card4
            url="https://www.blackrock.com/americas-offshore/en/education/etf"
            label="Article"
            main="ETFs & Mutual Funds"
            description="BlackRock ETF Course"
            src="./src/assets/graphs.jpg"
            buttonTxt="Read Now"
          ></Card4>
        </Grid>
        <Grid xs={12} sm={5}>
          <Card4
            url="https://www.youtube.com/watch?v=xLAxEYhXJSY"
            label="Video"
            main="Intro to Stocks"
            description="World renkown chef: Dave Ramsay"
            src="./src/assets/trading.jpg"
            buttonTxt="Watch Now"
          ></Card4>
        </Grid>
        <Grid xs={12} sm={5}>
          <Card4
            url="https://www.youtube.com/watch?v=-UJHObtnp5A"
            label="Video"
            main="Intro to Crypto Trading"
            description="My boy: Craig Perocco"
            src="./src/assets/crypto.jpg"
            buttonTxt="Watch Now"
          ></Card4>
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default Learn;
