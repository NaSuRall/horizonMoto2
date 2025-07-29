"use client";

import React, { useEffect } from "react";
import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function VespaCard() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      className="text-white py-12 flex flex-col items-center justify-center w-full  text-center"
    >
      <h2 className="text-4xl sm:text-3xl md:text-5xl font-semibold mb-4 leading-tight">
        Trouve Ton Equipement !
      </h2>
      <p className="text-base text-gray-400 leading-relaxed p-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="border border-red-600 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 items-center p-4 sm:p-6 rounded-lg">
        {/* Left Section */}
        <div className="p-4 sm:p-6 flex flex-col items-center md:items-start justify-center gap-4 col-span-1 text-left">
          <p className="text-2xl md:text-3xl font-semibold">Horizon Moto</p>
          <div className="text-center md:text-left">
            <p className="text-xs uppercase text-gray-300 text-center md:text-left">
              Découvrez notre sélection d&#39;équipements et accessoires de moto
              !
            </p>
          </div>
        </div>

        {/* Center Image Section */}
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] md:col-span-3 flex items-center justify-center">
          <Image
            src="/img/hgorizon.png"
            alt="Horizon Moto Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Right Section */}
        <div className="p-4 sm:p-6 flex flex-col items-center md:items-end justify-center gap-4 col-span-1 text-right">
          <div className="flex items-center gap-2">
            <Star className="text-white fill-white w-5 h-5" />
            <p className="text-xl md:text-2xl">4.4</p>
          </div>
          <p className="text-xs text-gray-400 text-center md:text-right">
            1001 Reviews on Maps
          </p>

          <button className="mt-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 text-xs md:text-sm uppercase rounded">
            Lire Plus <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.section>
  );
}
