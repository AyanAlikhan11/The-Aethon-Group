// components/HamburgerMenu.tsx
"use client";

import React from "react";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
  isVisible: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  onClick,
  isVisible,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative w-14 h-14 rounded-full
        bg-gradient-to-r from-purple-900 to-slate-900
        shadow-2xl flex items-center justify-center
        transform transition-all duration-500 ease-out
        hover:scale-110
        ${isVisible ? "translate-x-0 rotate-0" : "translate-x-20 rotate-[360deg]"}
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900
      `}
      aria-label="Toggle menu"
    >
      <div className="relative w-6 h-5 flex flex-col justify-between">
        {/* Top Line */}
        <span
          className={`
            block h-0.5 rounded-full bg-white
            transform transition-all duration-300 origin-center
            ${isOpen ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0"}
          `}
        />

        {/* Middle Line */}
        <span
          className={`
            block h-0.5 rounded-full bg-white
            transition-all duration-300
            ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}
          `}
        />

        {/* Bottom Line */}
        <span
          className={`
            block h-0.5 rounded-full bg-white
            transform transition-all duration-300 origin-center
            ${isOpen ? "-rotate-45 -translate-y-2" : "rotate-0 translate-y-0"}
          `}
        />
      </div>

      {/* Pulse Effect when closed */}
      {!isOpen && (
        <span
          className="
            absolute inset-0 rounded-full
            bg-purple-500 animate-ping opacity-20
          "
        />
      )}
    </button>
  );
};

export default HamburgerMenu;