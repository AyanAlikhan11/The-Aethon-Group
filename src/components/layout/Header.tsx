
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/common/logo";
import GetStartedModal from "@/components/ui/GetStartedModal";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className="fixed top-4 left-0 right-0 z-50 pointer-events-none"
      >
        <motion.nav className="pointer-events-auto w-full px-4">
          {/* ================= MOBILE NAV ================= */}
          <div className="lg:hidden flex items-center justify-between">
            {/* LEFT : LOGO (+ BRAND ONLY INITIALLY) */}
            <motion.div
              layout
              initial={{ scale: 0.9, rotate: -6 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className={`h-14 rounded-full bg-primary-600/20 backdrop-blur-md
                shadow-md flex items-center transition-all duration-300
                ${isScrolled ? "px-1" : "px-4 gap-3"}`}
            >
              <Logo showText={false} />

              {/* BRAND NAME (ONLY WHEN NOT SCROLLED) */}
              <AnimatePresence>
                {!isScrolled && (
                  <motion.span
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.25 }}
                    className="text-l font-heading font-semibold tracking-wide text-neutral-900 whitespace-nowrap"
                  >
                    The <span className="text-primary-600">Aethon</span> Group
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>

            {/* RIGHT : HAMBURGER (ALWAYS SPLIT) */}
            <motion.button
              layout
              initial={{ scale: 0.9, rotate: 6 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              onClick={() => setMobileOpen(true)}
              className="h-13 w-13 rounded-full bg-primary-600 shadow-md
                         flex items-center justify-center"
            >
              <Menu className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* ================= DESKTOP NAV (UNCHANGED) ================= */}
          <div
            className={`hidden lg:flex items-center w-full
              ${isScrolled ? "justify-between px-6" : "justify-center gap-20"}
            `}
          >
            {/* LEFT */}
            <AnimatePresence>
              {isScrolled && (
                <motion.div
                  layout
                  initial={{ scale: 0.7, rotate: -45, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 220, damping: 14 }}
                  className="w-16 h-16 rounded-full bg-primary-600/40 backdrop-blur-md
                             shadow-lg flex items-center justify-center"
                >
                  <Logo showText={false} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* CENTER */}
            <AnimatePresence>
              {!isScrolled && (
                <motion.div
                  layout
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.88, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="flex items-center h-15 px-10 rounded-full
                             bg-primary-600/20 backdrop-blur-md"
                >
                  <Logo />
                  <div className="flex gap-8 ml-10">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="font-medium text-neutral-900 hover:text-primary-600 transition"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* RIGHT */}
            <motion.div
              layout
              className={`shadow-lg flex items-center justify-center
                ${
                  isScrolled
                    ? "w-14 h-14 rounded-full bg-primary-600"
                    : "h-14 px-6 rounded-full bg-primary-600"
                }`}
            >
              <button
                onClick={() => setOpen(true)}
                className="font-medium text-white text-sm"
              >
                Get Started
              </button>
            </motion.div>
          </div>
        </motion.nav>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="fixed top-4 right-4 bottom-4 z-50 w-[85%] max-w-sm
                         rounded-3xl bg-white/90 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b">
                <Logo />
                <button onClick={() => setMobileOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col px-6 pt-8 gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-neutral-900 hover:text-primary-600"
                  >
                    {item.name}
                  </Link>
                ))}

                <button
                  onClick={() => {
                    setOpen(true);
                    setMobileOpen(false);
                  }}
                  className="mt-6 h-12 rounded-full bg-primary-600 text-white font-medium"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <GetStartedModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
