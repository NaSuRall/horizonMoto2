import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/footer";
import ChoixSection from "./components/ChoixSection";
import VespaCard from "./components/VespaCard";
import WhereToFind from "./components/WhereToFind";
import LogoCarousel from "./components/LogoCarousel";

export default function Home() {
  const logos = [
    <Image
      key="logo-1"
      src="/img/Honda_Logo.svg"
      alt="Logo Honda"
      width={90}
      height={40}
    />,
    <Image
      key="logo-2"
      src="/img/KTMFIGMA.png"
      alt="Logo KTM"
      width={90}
      height={40}
    />,
    <Image
      key="logo-3"
      src="/img/maxess.png"
      alt="Logo Maxxess"
      width={200}
      height={40}
    />,
    <Image
      key="logo-4"
      src="/img/suzuki-12.svg"
      alt="Logo Suzuki"
      width={200}
      height={40}
    />,
  ];

  return (
    <div className="flex flex-col w-full h-full bg-main">
      {/* Navbar */}
      <header className="w-full sticky top-0 z-50">
        <Nav />
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-start h-screen p-4 md:p-8 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-0"
        >
          <source src="/videos/videos.mp4" type="video/mp4" />
          Ton navigateur ne supporte pas la vidéo.
        </video>

        <div className="relative z-10 max-w-full md:w-1/2 px-4 md:px-20 flex flex-col gap-6">
          <h1 className="font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-4xl leading-tight">
            Horizon Moto
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed">
            Bienvenue chez votre concessionnaire et spécialiste moto situé à
            Saint-Ouen-l’Aumône, au cœur du Val-d’Oise (95). Que vous soyez
            passionné de deux-roues, amateur de sensations fortes ou simple
            curieux, notre équipe vous accueille dans un espace entièrement
            dédié à l’univers de la moto.
          </p>
          <button className="mt-8 px-6 py-3 w-50 bg-red-500 text-white text-base sm:text-lg rounded hover:bg-red-600 transition">
            En savoir plus
          </button>
        </div>
      </section>

      {/* Choix Section */}
      <section className="w-full h-full flex items-center justify-center px-4 md:px-20">
        <ChoixSection />
      </section>
      {/* Logo Carousel */}
      <section className="w-full py-12 flex justify-center">
        <LogoCarousel logos={logos} speed={15} />
      </section>
      {/* Vespa Card */}
      <section className="w-full h-screen flex items-center justify-center px-4 md:px-20">
        <VespaCard />
      </section>

      {/* Where To Find */}
      <section className="w-full flex items-center justify-center px-4 md:px-20 py-20">
        <WhereToFind />
      </section>

      {/* Footer */}
      <footer className="w-full ">
        <Footer />
      </footer>
    </div>
  );
}
