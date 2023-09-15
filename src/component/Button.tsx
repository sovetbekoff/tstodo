import React from "react";

interface ButtonProps {
  color: string;
  colorText: string;
  children: any;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  color,
  children,
  colorText,
  onClick,
}) => {
  return (
    <button
      style={{
        backgroundColor: color,
        color: colorText,
        border: "1px solid aqua",
        borderRadius: "20px",
        marginBottom: "4%",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
