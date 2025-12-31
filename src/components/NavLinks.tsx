// components/NavLinks.tsx
"use client";

import React from "react";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
}

interface NavLinksProps {
  links: NavLink[];
}

const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
  return (
    <div className="hidden md:flex items-center space-x-1">
      {links.map((link, index) => (
        <Link
          key={link.name}
          href={link.href}
          className="group relative px-4 py-2 overflow-hidden"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Background Hover Effect */}
          <span
            className="
              absolute inset-0 rounded-full
              bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0
              transform -translate-x-full group-hover:translate-x-full
              transition-transform duration-700 ease-out
            "
          />

          {/* Text */}
          <span
            className="
              relative text-sm font-medium text-gray-300
              group-hover:text-white transition-colors duration-300
            "
          >
            {link.name}
          </span>

          {/* Underline Effect */}
          <span
            className="
              absolute bottom-1 left-1/2 -translate-x-1/2
              w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400
              group-hover:w-3/4 transition-all duration-300
              rounded-full
            "
          />
        </Link>
      ))}

      {/* CTA Button */}
      <button
        className="
          ml-4 px-6 py-2 rounded-full
          bg-gradient-to-r from-purple-500 to-pink-500
          text-white font-medium text-sm
          shadow-lg shadow-purple-500/30
          hover:shadow-purple-500/50 hover:scale-105
          transition-all duration-300
          relative overflow-hidden group
        "
      >
        <span className="relative z-10">Get Started</span>
        <span
          className="
            absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
          "
        />
      </button>
    </div>
  );
};

export default NavLinks;