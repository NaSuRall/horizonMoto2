import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, House } from "lucide-react";

export default function Footer() {
  return (
    <div className="relative flex flex-col md:flex-row w-full h-full pt-32 bg-footer overflow-hidden py-10 px-6 md:px-0">
      <div className="flex flex-col md:flex-row w-full justify-around items-start z-10 gap-10 md:gap-0">
        {/* Logo */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <Image
            src="/logo.png"
            alt="Horizon Moto Logo"
            width={280}
            height={100}
          />
        </div>

        {/* Liens */}
        <div className="flex flex-col md:flex-row gap-20 text-white">
          <div>
            <h2 className="text-2xl mb-4">Nous Trouver !</h2>
            <div className="flex flex-col gap-1 text-sm text-white/70">
              <p className="flex w-50">
                11 Rue d'Épluches", "95310 Saint-Ouen-l’Aumône
              </p>
              <p className="flex w-50 pt-2">
                Ligne H - arrêt Épluches", "5 min à pied depuis la gare
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl mb-4">Nos Liens</h2>
            <div className="flex flex-col gap-1 text-sm text-white/70">
              <Link href="/">Accueil</Link>
              <Link href="/">Services</Link>
              <Link href="/">Produits</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl mb-4">Description</h2>
            <div className="flex flex-col gap-1 text-sm text-white/70">
              <p className="flex w-50">
                Notre boutique intègre également un espace Maxxess, l’un des
                leaders français des équipements et accessoires pour motards :
                casques, vestes, gants, bottes, antivols, bagagerie, pièces
                détachées
              </p>
            </div>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-row md:flex-col text-white justify-center md:justify-start gap-6 md:gap-8">
          <h2 className="text-2xl mb-4 whitespace-nowrap">Suivez nous </h2>
          <div className="flex flex-row gap-4 md:flex-col">
            <Link
              href="/"
              className="flex rounded-full bg-red-500 w-10 h-10 items-center justify-center"
            >
              <Facebook />
            </Link>
            <Link
              href="/"
              className="flex rounded-full bg-red-500 w-10 h-10 items-center justify-center"
            >
              <Instagram />
            </Link>
            <Link
              href="/"
              className="flex rounded-full bg-red-500 w-10 h-10 items-center justify-center"
            >
              <House />
            </Link>
          </div>
        </div>
      </div>

      {/* Texte HORIZON géant */}
      <div className="absolute bottom-[-120px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none select-none">
        <h2 className="text-[350px] font-bold text-white/5 leading-none">
          HORIZON
        </h2>
      </div>
    </div>
  );
}
