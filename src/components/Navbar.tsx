// components/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import NavLinks from "@/components/NavLinks";
import HamburgerMenu from "../components/HamburgerMenu";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    // Trigger ball roll animation on mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Initial Ball Animation Container */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out
          ${isLoaded ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* Main Navbar - Visible when not scrolled */}
        <nav
          className={`
            transition-all duration-500 ease-in-out
            ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
        >
          <div
            className={`
              bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900
              mx-auto mt-4 rounded-full shadow-2xl
              transition-all duration-1000 ease-out
              ${isLoaded 
                ? "w-[95%] max-w-7xl px-8 py-4" 
                : "w-20 h-20 rounded-full ml-[-100px]"
              }
              ${isLoaded ? "" : "animate-ball-roll"}
            `}
          >
            <div
              className={`
                flex items-center justify-between
                transition-opacity duration-500 delay-500
                ${isLoaded ? "opacity-100" : "opacity-0"}
              `}
            >
              {/* Logo Section */}
              <Logo />

              {/* Navigation Links */}
              <NavLinks links={navLinks} />
            </div>
          </div>
        </nav>
      </div>

      {/* Split Navbar - Visible when scrolled */}
      <div
        className={`
          fixed top-4 left-0 right-0 z-50
          flex justify-between items-center px-4
          transition-all duration-500 ease-in-out
          ${isScrolled 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-full pointer-events-none"
          }
        `}
      >
        {/* Left - Floating Logo */}
        <div
          className={`
            bg-gradient-to-r from-slate-900 to-purple-900
            rounded-full p-3 shadow-2xl
            transform transition-all duration-500 ease-out
            hover:scale-110 hover:rotate-12
            ${isScrolled ? "translate-x-0 rotate-0" : "-translate-x-20 rotate-[-360deg]"}
          `}
        >
          <div className="w-12 h-12 flex items-center justify-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              A
            </span>
          </div>
        </div>

        {/* Right - Hamburger Menu */}
        <HamburgerMenu
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          isVisible={isScrolled}
        />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-lg
          transition-all duration-500 ease-in-out
          ${isMenuOpen && isScrolled 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`
                text-3xl font-bold text-white hover:text-purple-400
                transition-all duration-300 transform
                ${isMenuOpen 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-10 opacity-0"
                }
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;