"use client";

import React, { useEffect, useState } from "react";

type CarouselProps = {
    slides: React.ReactNode[];
    interval?: number;
};

const Carousel: React.FC<CarouselProps> = ({ slides, interval = 4000 }) => {
    const [current, setCurrent] = useState(0);
    const total = slides.length;

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setCurrent((prev) => (prev + 1) % total);
        }, interval);

        return () => clearInterval(autoSlide);
    }, [total, interval]);

    return (
        <div className="relative w-full h-full mx-auto overflow-hidden rounded-lg shadow-lg">
            {/* Slides */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                        {slide}
                    </div>
                ))}
            </div>
            {/*<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === current ? "bg-red-600" : "bg-gray-400"
                        }`}
                    />
                ))}
            </div>
            */}
        </div>
    );
};

export default Carousel;
