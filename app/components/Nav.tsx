import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  return (
    <nav className="flex flex-row w-full h-full items-center justify-around p-2">
      <div className="w-full">
        <Image
          src="/logo.png"
          alt="Horizon Moto Logo"
          className="p-5"
          width={200}
          height={100}
        />
      </div>
      <div className="flex flex-row items-center justify-center w-full gap-20">
        <Link
          href="/"
          className="flex  items-center justify-center text-1xl p-2 h-15 w-30"
        >
          Accueil
        </Link>
        <Link
          href="/"
          className="flex  items-center justify-center text-1xl p-2 h-15 w-30"
        >
          Présentation
        </Link>
        <Link
          href="/"
          className="flex  items-center justify-center text-1xl p-2 h-15 w-30"
        >
          Nos Actualités
        </Link>
        <Link
          href="/"
          className="flex  items-center justify-center text-1xl p-2 h-15 w-30"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
