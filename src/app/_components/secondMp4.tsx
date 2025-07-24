// src/app/_components/mp4Section.tsx
const SecondMp4 = () => {
  return (
 <section className="pt-30 relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/secondMp4.mp4"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 " />
        <div className="z-20 text-center px-6 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
            
        Та зөв асрагчийн ажилд олохыг хүсч байна уу?
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 drop-shadow-md">
            Бидэнтэй нэгдэхийг хүсвэл доорхи асрагчийн ажилд олох товчийг дарна уу
          </p>
          <button className="mt-8 px-8 py-3 text-lg font-semibold bg-pink-600 hover:bg-pink-700 transition rounded-full shadow-lg">
            Асрагчийн ажилд орох
          </button>
        </div>
      </section>
  );
};

export default SecondMp4;
