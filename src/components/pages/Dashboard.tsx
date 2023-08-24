import React from "react";
import { useParams } from "react-router-dom";

function Dashboard() {
  const { email, password } = useParams();
  console.log(email);
  return <></>;

  // Rest of your Dashboard component code
}

export default Dashboard;
