import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="flex flex-row w-full absolute items-center top-5 right-5 justify-end p-5">
      <Image src="/logo.png" alt="Horizon Moto Logo" width={200} height={100} />
    </div>
  );
}
