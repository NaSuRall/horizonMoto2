"use client";

import React from "react";
import { MapPin, Train, Clock } from "lucide-react";

const WhereToFind: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br text-white py-20 px-6 md:px-24">
      <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 tracking-wide">
        Où nous retrouver ?
      </h2>

      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start max-w-7xl mx-auto">
        {/* Carte */}
        <div className="w-full md:w-1/2 rounded-xl shadow-xl overflow-hidden border border-gray-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.701993483738!2d2.1167181125438193!3d49.054289586780335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e65f85b6c9ddd7%3A0x16017c0e046b395f!2sMaxxess%20Horizon%20Moto!5e0!3m2!1sfr!2sfr!4v1753736911109!5m2!1sfr!2sfr"
            width="600"
            height="450"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Infos */}
        <div className="w-full md:w-1/2 flex flex-col gap-10 font-mono text-gray-300">
          <InfoBlock
            Icon={MapPin}
            title="Adresse"
            lines={["11 Rue d'Épluches", "95310 Saint-Ouen-l’Aumône"]}
          />
          <InfoBlock
            Icon={Train}
            title="Accès en transports"
            lines={["Ligne H - arrêt Épluches", "5 min à pied depuis la gare"]}
          />
          <InfoBlock
            Icon={Clock}
            title="Horaires"
            lines={["Lundi au Samedi : 9h - 19h", "Fermé le Dimanche"]}
          />
        </div>
      </div>
    </section>
  );
};

type InfoBlockProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  lines: string[];
};

const InfoBlock: React.FC<InfoBlockProps> = ({ Icon, title, lines }) => (
  <div className="flex gap-5 items-start group cursor-default transition-colors duration-300 hover:text-red-500">
    <Icon className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
    <div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <div className="space-y-1 text-sm">
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  </div>
);

export default WhereToFind;
