const Hero = () => {
  return (
    <>
      <section className="relative h-[90vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/hero-video.mp4"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 bg-black/40">
          <h1 className="text-2xl md:text-4xl mb-4">
            TRUSTED CARE HAPPY FAMILY ИТГЭЛТЭЙ ХАЛАМЖ
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">АЗЖАРГАЛТАЙ ГЭР БҮЛ</p>
        </div>
      </section>

      <div className="text-center px-7">
        <h2 className="text-3xl py-5">Mom - Nanny Center Mongolia нь</h2>
        <div className="font-serif">
          <p className="pt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
            minus velit iste doloremque maxime. Ex incidunt perspiciatis enim
            voluptas corrupti cum facere quod pariatur quo, delectus, commodi
            beatae, nam magnam.
          </p>
          <p className="py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            natus similique laudantium facere ipsa cumque recusandae amet eum
            quibusdam facilis maiores, architecto ratione aspernatur magnam earum
            animi atque! Ipsa, voluptatem.
          </p>
          <p className="py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            natus similique laudantium facere ipsa cumque recusandae amet eum
            quibusdam facilis maiores, architecto ratione aspernatur magnam earum
            animi atque! Ipsa, voluptatem.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
