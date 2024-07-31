'use client'

import Image from "next/image";
import { useState } from "react";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-black text-white fixed top-0 w-full z-50">
            <div className="flex justify-between items-center p-4 md:px-8 md:py-2">
                <div className="text-xl font-bold">
                    <a href="/">
                        <Image src={"/assets/logoTeteu-branca.png"} alt="logo matheus melo" width={48} height={48} />
                    </a>
                </div>
                <div className="hidden md:flex space-x-8 items-center">
                    <a href="/" className="hover:text-amber-800 font-mono">Sobre</a>
                    <a href="/projects" className="hover:text-amber-800 font-mono">Projetos</a>
                    <a href="/summary" className="hover:text-amber-800 font-mono">Resumo</a>
                    <div className="flex space-x-4 items-center">
                        <a href="https://github.com/matheus-webp" target='_blank'>
                            <Image src={"/assets/github.svg"} alt="Github Icon" width={20} height={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/matheus-webp/" target='_blank'>
                            <Image src={"/assets/linkedin.svg"} alt="Linkedin Icon" width={24} height={24} />
                        </a>
                    </div>
                </div>
                <div className="md:hidden">
                    <button className="text-white" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="flex flex-col items-center space-y-4 bg-black text-white py-4 md:hidden">
                    <a href="/" className="hover:text-amber-800 font-mono">Sobre</a>
                    <a href="/projects" className="hover:text-amber-800 font-mono">Projetos</a>
                    <a href="#" className="hover:text-amber-800 font-mono">Resumo</a>
                    <div className="flex space-x-4 items-center">
                        <a href="https://github.com/matheus-webp" target='_blank'>
                            <Image src={"/assets/github.svg"} alt="Github Icon" width={24} height={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/matheus-webp/" target='_blank'>
                            <Image src={"/assets/linkedin.svg"} alt="Linkedin Icon" width={24} height={24} />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
