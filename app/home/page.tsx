import Navbar from "../components/Navbar";
import Sidebar from "@/app/components/sidebar";

export default function Home() {
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Vidéo en plein écran */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
      >
        <source src="/videos/videos.mp4" type="video/mp4" />
        Ton navigateur ne supporte pas la vidéo.
      </video>

      {/* Contenu par-dessus la vidéo */}
      <div className="relative z-10 flex flex-col w-full h-full">
        <Sidebar />
        <div className="flex-1" />
        <Navbar />
      </div>
      <div className="flex flex-col h-50  bg-white"></div>
    </div>
  );
}
