import React from "react";

const Header = () => {
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
                    <img src="/assets/logo.png" alt="Logo" className="h-8 mr-2" />
                    <span className="text-textWhite text-lg font-bold">R1YCK</span>
                </div>

                {/* Links */}
                <ul className="flex space-x-6 text-textWhite text-sm font-medium">
                    <li className="hover:underline cursor-pointer">SOBRE</li>
                    <li className="hover:underline cursor-pointer">TRABALHO</li>
                    <li className="hover:underline cursor-pointer">FERRAMENTAS</li>
                    <li className="hover:underline cursor-pointer">CONTATO</li>
                </ul>
            </nav>

            {/* Títulos */}
            <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
                <h1 className="text-textWhite text-4xl sm:text-6xl font-bold mb-4 mt-[-120px]">
                    Olá, sou o r1yck!
                </h1>
                <p className="text-textWhite text-lg sm:text-xl font-light">
                    Desenvolvedor Back-End - Editor de Vídeos
                </p>
            </div>
        </header>
    );
};

export default Header;
