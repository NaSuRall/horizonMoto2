import Navbar from "../components/Navbar";
import Sidebar from "@/app/components/sidebar";


export default function Home() {
    return (
        <div className="flex flex-col w-full h-screen bg-black">
            <div className="z-3">
                <Sidebar />
            </div>
            <div className="flex flex-col h-screen rounded-2xl m-6 bg-red-500">
                <video autoPlay muted loop id="bgVideo">
                    <source src="../components/videos.mov" type="video/mov"/>
                    Ton navigateur ne supporte pas la vidéo.
                </video>
            </div>
            <div className="flex flex-col h-20 mb-6  ml-6 mr-6 rounded-2xl bg-white">
                <Navbar/>
            </div>
        </div>
    );
}
