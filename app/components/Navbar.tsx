import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row w-full h-full ">
      <ul className="flex flex-row w-full items-center justify-around overflow-hidden">
        <li
          className=" w-full flex items-center justify-center border-r-2 border h-full
                hover:-translate-y-1 hover:-translate-x-1 hover:bg-red-500 transition duration-200"
        >
          <Link
            href="/"
            className="flex w-full h-full items-center justify-center text-1xl"
          >
            Accueil
          </Link>
        </li>
        <li className=" w-full flex items-center justify-center border-r-2 border h-full hover:-translate-y-1 hover:-translate-x-1 hover:bg-red-500 transition duration-200">
          Produit
        </li>
        <li className=" w-full flex items-center justify-center border-r-2 border h-full hover:-translate-y-1 hover:-translate-x-1 hover:bg-red-500 transition duration-200">
          Destockage
        </li>
        <li className=" w-full flex items-center justify-center h-full hover:-translate-y-1 hover:-translate-x-1 hover:bg-red-500 transition duration-200">
          Contact
        </li>
      </ul>
    </nav>
  );
}
