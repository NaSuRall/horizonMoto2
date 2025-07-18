import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, House } from "lucide-react";

export default function Footer() {
  return (
    <div className="relative flex flex-col w-full h-full pt-32 bg-footer overflow-hidden py-10">
      <div className="flex flex-row w-full justify-around items-start z-10">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Horizon Moto Logo"
          width={280}
          height={100}
        />

        {/* Liens */}
        <div className="flex flex-row gap-20 text-white">
          <div>
            <h2 className="text-2xl mb-4">Our Links</h2>
            <div className="flex flex-col gap-1 text-sm text-white/70">
              <Link href="/">Accueil</Link>
              <Link href="/">Services</Link>
              <Link href="/">Produits</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl mb-4">Our Links</h2>
            <div className="flex flex-col gap-1 text-sm text-white/70">
              <Link href="/">Accueil</Link>
              <Link href="/">Services</Link>
              <Link href="/">Produits</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl mb-4">Autres Liens</h2>
            <div className="flex flex-col gap-1 text-sm text-white/70">
              <Link href="/">Accueil</Link>
              <Link href="/">Services</Link>
              <Link href="/">Produits</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-col text-white">
          <h2 className="text-2xl mb-4">Suivez nous </h2>
          <div className="flex flex-row gap-8 text-sm text-white/70">
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
      <div className="absolute bottom-[-120px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
        <h2 className="text-[350px] font-bold text-white/5 leading-none select-none">
          HORIZON
        </h2>
      </div>
    </div>
  );
}
