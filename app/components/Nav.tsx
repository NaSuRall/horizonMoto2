"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[90%] md:w-[80%] px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-lg rounded-full shadow-xl"
    >
      <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-6 md:gap-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/img/logo.png"
            alt="Horizon Moto Logo"
            width={120}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Menu links (desktop) */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10 text-white font-medium text-sm md:text-base">
          {["Accueil", "Présentation", "Nos Actualités", "Contact"].map(
            (text, index) => (
              <Link
                key={index}
                href="/"
                className="hover:text-red-500 transition"
              >
                {text}
              </Link>
            )
          )}
        </div>

        {/* Phone number (desktop) */}
        <div className="hidden md:flex text-white text-sm md:text-base font-semibold">
          06 40 53 58 27
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="  mt-2 overflow-hidden md:hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4 text-white text-base">
              {["Accueil", "Présentation", "Nos Actualités", "Contact"].map(
                (text, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="hover:text-red-500 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {text}
                  </Link>
                )
              )}
              <span className="pt-4 border-t border-gray-700 text-center">
                06 40 53 58 27
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
