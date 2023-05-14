import "../../App.css";
import React from 'react'
import Card from "../../components/Card";
// Add this line to import the Card component

function About() {
  return (
    <div>
      <Card
        image="logo.png"
        title="Arjun Menon"
        description="UofT CS"
        caption="Cool Guy"
      />
      <Card
      image="logo.png"
      title="Affan Amir"
      description="UofT Mech Eng 2T6"
      caption="Engineering guy"
      />

      <h1>This is why we made this:</h1>
      <h2>FAANG pls accept</h2>
    </div>
  )
}

export default About;
