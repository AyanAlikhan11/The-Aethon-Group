// components/Logo.tsx
"use client";

import React from "react";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center space-x-3 group">
      {/* Logo Icon */}
      <div className="relative">
        <div
          className="
            w-12 h-12 rounded-full
            bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400
            flex items-center justify-center
            shadow-lg shadow-purple-500/30
            group-hover:shadow-purple-500/50
            transition-all duration-300
            group-hover:scale-110
          "
        >
          {/* Inner Logo Design */}
          <div className="relative w-8 h-8">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Stylized "A" for Aethon */}
              <path
                d="M50 10 L80 85 L65 85 L57 65 L43 65 L35 85 L20 85 L50 10Z"
                fill="white"
                className="drop-shadow-lg"
              />
              <path
                d="M50 35 L58 55 L42 55 L50 35Z"
                fill="url(#gradient)"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Glow Effect */}
        <div
          className="
            absolute inset-0 rounded-full
            bg-gradient-to-br from-purple-500 to-pink-500
            blur-xl opacity-50 -z-10
            group-hover:opacity-75 transition-opacity duration-300
          "
        />
      </div>

      {/* Company Name */}
      <div className="flex flex-col">
        <span
          className="
            text-xl font-bold tracking-wider
            bg-gradient-to-r from-white via-purple-200 to-white
            bg-clip-text text-transparent
            group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-purple-300
            transition-all duration-300
          "
        >
          The Aethon
        </span>
        <span
          className="
            text-sm font-medium tracking-[0.3em] text-purple-300
            group-hover:text-pink-300 transition-colors duration-300
          "
        >
          GROUP
        </span>
      </div>
    </Link>
  );
};

export default Logo;