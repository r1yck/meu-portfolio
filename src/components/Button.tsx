import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <Link href={link} legacyBehavior>
      <a
        className="bg-button text-white text-center px-10 py-2 rounded-[6px] font-medium hover:bg-opacity-90 transition duration-200"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        {text}
      </a>
    </Link>
  );
};

export default Button;
