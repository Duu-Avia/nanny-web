"use client";
import { useState } from "react";

const Mp4Section = () => {
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleMute = () => {
    const video = document.getElementById("myVideo") as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
      video.play();
    }
  };

  return (
    <section className="relative w-screen group">
      {/* VIDEO FULL WIDTH */}
      <video
        id="myVideo"
        src="/compressedMomNanny.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[600px] object-cover aspect-video brightness-100 transition duration-500 group-hover:brightness-50"
      >
        <source src="/compressedMomNanny.mp4" type="video/mp4" />
      </video>

      {/* TEXT + BUTTON CENTERED ON HOVER */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-sm">Бидний танилцуулга</p>
        <button className="text-white px-4 py-2 rounded hover:bg-gray-600 text-sm">
          Үргэлжлүүлэн үзэх
        </button>
      </div>

      {/* MUTE BUTTON */}
      <button
        onClick={handleToggleMute}
        className="absolute bottom-4 right-4 z-20 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 text-sm"
      >
        {isMuted ? "🔊 Unmute" : "🔇 Mute"}
      </button>
    </section>
  );
};

export default Mp4Section;
