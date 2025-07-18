"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ChoixSection() {
  return (
    <section className="flex  text-white p-30 gap-16 w-full ">
      {/* Partie gauche */}
      <div className="flex flex-col gap-8 flex-1 max-w-xl">
        {/* Titre */}
        <h2 className="text-4xl font-mono leading-snug">
          Choisissez ce qui <br /> vous convient !
        </h2>

        {/* Paragraphe */}
        <p className="text-sm text-gray-400 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et consectetur adipiscing elit,
          sed dolore magna aliqua.
        </p>

        {/* Les 3 carrés gris */}
        <div className="flex gap-6">
          <div className="w-[150] h-[200] flex justify-center items-center ">
            <Image
              src="/img/img1.png"
              alt="Horizon Moto Logo"
              width={280}
              height={40}
              className="w-full max-h-full object-contain"
            />
          </div>
          <div className="w-[150] h-[200] flex justify-center items-center ">
            <Image
              src="/img/img2.png"
              alt="Horizon Moto Logo"
              width={280}
              height={40}
              className="w-full max-h-full object-contain"
            />
          </div>
          <div className="w-[150] h-[200] flex justify-center items-center ">
            <Image
              src="/img/img3.png"
              alt="Horizon Moto Logo"
              width={280}
              height={40}
              className="w-full max-h-full object-contain"
            />
          </div>
        </div>

        {/* Texte encadré rouge */}
        <div className="border border-red-500 text-red-500 px-4 py-2 max-w-[350px]">
          Le Casque Parfait Pour Vos Sortie En Été !
        </div>

        {/* Ligne avec bouton et flèches */}
        <div className="flex items-center gap-6">
          <button
            type="button"
            className="bg-red-500 hover:bg-red-600 transition flex items-center gap-2 px-4 py-2 text-xs uppercase font-semibold tracking-wide rounded"
          >
            LIRE PLUS
            <ChevronRight />
          </button>

          {/* Flèches navigation */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-white text-2xl cursor-pointer select-none">
              «
            </span>
            <span className="text-red-500 text-4xl cursor-pointer select-none">
              »
            </span>
          </div>
        </div>
      </div>

      {/* Partie droite grande zone grise */}
      <div className="flex-1 flex justify-center items-center ">
        <Image
          src="/img/img4.jpg"
          alt="Horizon Moto Logo"
          width={880}
          height={800}
          className="w-full max-h-full object-contain"
        />
      </div>
    </section>
  );
}
