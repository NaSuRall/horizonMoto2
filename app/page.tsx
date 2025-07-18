import Sidebar from "./components/sidebar";
import Carousel from "./components/carousel";
import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/footer";

export default function Home() {
  const slides = [
    <div
      key="slide-1"
      className="animate-shrink p-5 flex w-full h-full items-center justify-center text-2xl font-bold"
    >
      {/*  <Image
              src="/img/maxess.png"
              width={800}
              height={800}
              alt="Picture of the author"
          />
          */}
      <h2 className="text-9xl text-black">MAXXESS</h2>
    </div>,
    <div
      key="slide-2"
      className="h-full p-5 overflow-hidden bg-orange-500 flex items-center justify-center text-white text-2xl font-bold animate-ktm"
    >
      <h2 className="text-9xl text-black">KTM</h2>
    </div>,
    <div
      key="slide-3"
      className="h-full p-5 overflow-hidden  bg-red-600 flex items-center justify-center text-white text-2xl font-bold"
    >
      <h2 className="text-9xl text-black">HONDA</h2>
    </div>,
    <div
      key="slide-4"
      className="h-full p-5 overflow-hidden  bg-blue-500 flex items-center justify-center text-white text-2xl font-bold"
    >
      <h2 className="text-9xl text-black">SUZUKI</h2>
    </div>,
    <div
      key="slide-5"
      className="h-full p-5 overflow-hidden  bg-black items-center justify-center text-white text-2xl font-bold"
    >
      <h2 className="text-9xl text-black">MOTOPLEX</h2>
    </div>,
    <div
      key="slide-6"
      className="h-full p-5 overflow-hidden  bg-green-500 flex items-center justify-center text-white text-2xl font-bold"
    >
      <h2 className="text-9xl text-black">Kawasaki</h2>
    </div>,
  ];

  return (
    <div className="flex flex-col w-full h-full bg-main">
      {/* <div className="z-3">
        <Sidebar />
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full">
        <Carousel slides={slides} interval={3000} />
      </div> */}
      <div className="flex flex-row w-full h-full">
        <Nav />
      </div>

      <div className="flex flex-col items-center justify-center h-screen border-2 p-2">
        <h1 className="text-4xl font-bold text-black">Header</h1>
      </div>

      <div className="flex flex-col h-[600px] w-full ">
        <Footer />
      </div>
    </div>
  );
}
