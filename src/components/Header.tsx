import React from "react";
import Link from "next/link"; // Importando o componente Link

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header
      className="bg-cover bg-center h-screen relative"
      style={{
        backgroundImage: `url('/assets/bg-background.png')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 relative z-10">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="h-5 mr-2" />
          <span className="text-textWhite text-lg font-bold">R1YCK</span>
        </div>

        {/* Links */}
        <ul className="flex space-x-6 text-textWhite text-sm font-medium">
          <li className="hover:underline cursor-pointer">
            <Link href="/about">SOBRE</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href="/work">TRABALHO</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href="/tools">FERRAMENTAS</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href="/contact">CONTATO</Link>
          </li>
        </ul>
      </nav>

      {/* Títulos */}
      <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
        <h1 className="text-textWhite text-4xl sm:text-6xl font-bold mb-4 mt-[-120px]">
          {title}
        </h1>
        <p className="text-textWhite text-lg sm:text-xl font-light">{subtitle}</p>
      </div>
    </header>
  );
};

export default Header;
