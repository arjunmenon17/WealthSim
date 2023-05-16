import React from "react";
import Card from "./Card";
import "./CardSection.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Meet the creators!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Card
              src="/src/assets/tatum.jpg"
              textMain="Arjun Menon"
              textDesc="CS Spec looking to focus in: ."
              label="UofT CS '2026"
              path="https://www.linkedin.com/in/arjunajaymenon/"
            ></Card>
            <Card
              src="/src/assets/Velupillai_Prabhakaran.jpg"
              textMain="Affan Amir"
              textDesc="Mech Eng Major specializing in Mechatronics and...: ."
              label="UofT Mech Eng 2T6"
              path="https://www.linkedin.com/in/affan-amir-7023a3218/"
            ></Card>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
