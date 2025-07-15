import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex flex-row w-full h-full ">
            <ul className="flex flex-row w-full items-center justify-around overflow-hidden">
                <li className=" w-full flex items-center justify-center border-r-2 border h-full"><Link href="/">Accueil</Link></li>
                <li className=" w-full flex items-center justify-center border-r-2 border h-full">Produit</li>
                <li className=" w-full flex items-center justify-center border-r-2 border h-full">Destockage</li>
                <li className=" w-full flex items-center justify-center h-full">Contact</li>
            </ul>
        </nav>
    )
};