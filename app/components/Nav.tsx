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
      className="bg-black fixed top-0 left-0 w-full z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Horizon Moto Logo"
            width={160}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Hamburger button (mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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

        {/* Menu links (desktop) */}
        <div className="hidden md:flex items-center space-x-10 text-white text-lg">
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
        <div className="hidden md:flex text-white text-lg font-medium">
          06 40 53 58 27
        </div>
      </div>

      {/* Mobile menu (slide down) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-black overflow-hidden md:hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4 text-white text-lg">
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
