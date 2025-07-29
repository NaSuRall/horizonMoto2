"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ChoixSection() {
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  const [leftRef, leftInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [rightRef, rightInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (leftInView) leftControls.start("visible");
    if (rightInView) rightControls.start("visible");
  }, [leftInView, rightInView, leftControls, rightControls]);

  return (
    <section className="w-full h-full text-white px-4 md:px-12 lg:px-32 py-12">
      <div className="w-full max-w-screen-xl h-full mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* LEFT SIDE */}
        <motion.div
          ref={leftRef}
          initial="hidden"
          animate={leftControls}
          className="flex-1 flex flex-col gap-8 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Choisissez ce qui <br /> vous convient !
          </h2>

          <p className="text-base text-gray-400 leading-relaxed">
            Nous proposons un large choix de motos neuves et d’occasion de
            grandes marques telles que KTM, Honda, Kawasaki, Suzuki, et bien
            d&#39;autres. Que ce soit pour l&#39;achat, l&#39;entretien ou
            l&#39;équipement du pilote, Horizon Moto vous accompagne avec
            expertise et passion.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-start items-center gap-4 mt-4">
            {["img1.png", "img2.png", "img3.png"].map((img, i) => (
              <div
                key={i}
                className="w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] h-auto flex justify-center items-center"
              >
                <img
                  src={`/img/${img}`}
                  alt={`Image ${i + 1}`}
                  width={200}
                  height={210}
                  className="object-contain rounded-2xl"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          ref={rightRef}
          initial="hidden"
          animate={rightControls}
          className="flex-1 flex justify-center items-center"
        >
          <div className="w-full max-w-[500px]">
            <img
              src="/img/img4.jpg"
              alt="Horizon Moto"
              width={900}
              height={700}
              className="w-full h-auto object-cover rounded shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
