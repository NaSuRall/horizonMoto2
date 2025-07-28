"use client";

import React from "react";

type LogoMarqueeProps = {
  logos: React.ReactNode[];
  speed?: number; // seconds
};

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ logos, speed = 20 }) => {
  return (
    <div className="overflow-hidden py-12 pt-20 w-full">
      <div
        className="flex animate-marquee whitespace-nowrap w-max"
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Premier groupe */}
        <div className="flex items-center justify-around min-w-full gap-8 px-4">
          {logos.map((logo, i) => (
            <div
              key={`logo1-${i}`}
              className="flex-shrink-0 max-w-[120px] w-full"
            >
              {logo}
            </div>
          ))}
        </div>

        {/* Deuxième groupe (copie) */}
        <div className="flex items-center justify-around min-w-full gap-8 px-4">
          {logos.map((logo, i) => (
            <div
              key={`logo2-${i}`}
              className="flex-shrink-0 max-w-[120px] w-full"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
