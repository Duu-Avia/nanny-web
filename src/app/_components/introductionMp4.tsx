import Link from "next/link";
import { useRef, useState } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="pt-30 w-full bg-white py-0 relative pt-30">
      <div className="flex justify-center items-center text-white bg-[#B1ACA0]  text-[34px] h-[50px]">
        Бидний зорилго
      </div>
      <div className="w-full relative">
        <video
          ref={videoRef}
          className="w-full h-auto object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/compressedMomNanny.mp4"
        />
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm hover:text-pink-500 transition"
        >
          {isMuted ? "🔊 Unmute" : "🔇 Mute"}
        </button>
        <Link href={"/#"}>
           <button className="absolute bottom-4 right-30 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm hover:text-pink-500 transition">
            үргэлжлүүлэн үзэх
        </button></Link>
     
      </div>
    </section>
  );
};

export default VideoSection;
