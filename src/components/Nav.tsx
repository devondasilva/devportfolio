import React, { useState, useEffect } from 'react';
import logo from '../assets/img/log.svg';
import '../index.css';

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const brandColor = "#8DC63F";

    // Effet pour changer le style au scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`top-0 left-0 w-full z-[100] transition-all duration-300 ${
                scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6 md:py-8'
            }`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    
                    {/* Logo */}
                    <a href="/" className="z-[60]">
                        <img src={logo} alt="Logo" className="w-24 md:w-32 h-auto" />
                    </a>

                    {/* Hamburger Button */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex flex-col gap-1.5 z-[60] p-2"
                        aria-label="Menu"
                    >
                        <span className={`h-0.5 w-6 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2 bg-black' : 'bg-white'}`}></span>
                        <span className={`h-0.5 w-6 transition-all duration-300 ${isOpen ? 'opacity-0' : 'bg-white'}`}></span>
                        <span className={`h-0.5 w-6 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2 bg-black' : 'bg-white'}`}></span>
                    </button>

                    {/* Menu Links */}
                    <div className={`
                        fixed md:static top-0 left-0 w-full md:w-auto h-screen md:h-auto
                        bg-white md:bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-end gap-10 md:gap-10
                        transition-all duration-500 ease-in-out z-50
                        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}
                    `}>
                        <ul className="flex flex-col md:flex-row items-center gap-8 md:gap-10 list-none">
                            {['Home', 'My Projects', 'About Me'].map((item) => {
                                const path = item === 'Home' ? '/' : `/${item.replace(/\s/g, '')}`;
                                return (
                                    <li key={item} className="relative group">
                                        <a 
                                            href={path} 
                                            onClick={() => setIsOpen(false)}
                                            className="text-2xl md:text-sm font-bold uppercase tracking-widest text-slate-800 no-underline transition-colors hover:text-black"
                                        >
                                            {item}
                                        </a>
                                        {/* Underline effect */}
                                        <span 
                                            className="absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                                            style={{ backgroundColor: brandColor }}
                                        ></span>
                                    </li>
                                );
                            })}
                            
                            <li>
                                <a 
                                    href="/Contact" 
                                    onClick={() => setIsOpen(false)}
                                    className="px-8 py-3 md:px-6 md:py-2.5 text-white rounded-full font-bold text-lg md:text-sm tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-200"
                                    style={{ backgroundColor: brandColor }}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Spacer pour compenser la nav fixed (pour ne pas que le contenu passe dessous) */}
            <div className="h-20 md:h-28"></div>
        </>
    );
}

export default Nav;