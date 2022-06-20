import React from "react";
import { Button } from "../components";

const Plans = ({ cost, children }) => {
  return (
    <div>
      <h5>{children}</h5>
      <Button text="Subscribe" />
    </div>
  );
};

export default Plans;
