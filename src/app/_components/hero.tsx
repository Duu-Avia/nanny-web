// src/app/_components/hero.tsx
const Hero = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/hero-video.mp4"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
       
АЗЖАРГАЛТАЙ ГЭР БҮЛ
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-xl">
         TRUSTED CARE HAPPY FAMILY
ИТГЭЛТЭЙ ХАЛАМЖ
        </p>
        <button className="mt-8 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full text-lg transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
