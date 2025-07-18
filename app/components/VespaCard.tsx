"use client";

import React from "react";
import { Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function VespaCard() {
  return (
    <section className=" text-white py-16 flex h-full items-center justify-center w-full flex-col px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-semibold mb-4">
        Find Vespa Metic In Your City
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="border border-red-600 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center">
        {/* Left Section */}
        <div className="p-6 flex flex-col items-center justify-between gap-6">
          <p className="text-xs uppercase text-gray-300">
            Sign up to get exclusive updates, discounts
          </p>
          <ChevronLeft className="text-red-600 w-6 h-6" />
          <div>
            <p className="text-3xl font-semibold">$70</p>
            <p className="text-xs text-gray-500 mt-1">
              Current Price of Automatic Vespa
            </p>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="bg-gray-300 h-[250px] md:h-[500px] " />

        {/* Right Section */}
        <div className="p-6 flex flex-col items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Star className="text-white fill-white w-5 h-5" />
            <p className="text-2xl">4.9</p>
          </div>
          <p className="text-xs text-gray-400">From 130,000+ Reviews</p>
          <ChevronRight className="text-white w-6 h-6" />
          <button className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 text-sm uppercase">
            Lire Plus <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
