import React from "react";

interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "damger"; //adding ? makes the compoment as optuional criteria
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
