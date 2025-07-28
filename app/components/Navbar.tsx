import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex  items-center justify-center p-10">
      <ul className="flex items-center">
        <li>
          <Link
            href="/"
            className="group flex items-center gap-2 px-8 py-3 bg-white rounded-2xl text-lg font-medium shadow-md transform transition-all duration-300 hover:scale-105"
          >
            {/* Texte */}
            <span className="transition-all duration-300">Accès au Site</span>

            {/* Flèche */}
            <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
