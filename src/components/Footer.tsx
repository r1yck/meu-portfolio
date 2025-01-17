import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-backgroundFooter py-8 flex flex-col items-center">
      {/* Logo */}
      <img src="/assets/logo.png" alt="Logo" className="h-8 mb-4" />

      {/* Texto de Copyright */}
      <p
        className="text-white text-center"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        COPYRIGHT © 2025 R1YCK
      </p>
    </footer>
  );
};

export default Footer;
