import Image from "next/image";

const Hero = () => {
  return (
         <section className="px-6 py-10 text-center md:text-left md:flex md:items-center md:justify-between max-w-6xl mx-auto">
           <div className="md:w-1/2 space-y-6">
             <h2 className="text-4xl font-bold leading-snug text-[#1e1e2f]">
              TRUSTED CARE HAPPY FAMILY ИТГЭЛТЭЙ ХАЛАМЖ <br /> АЗЖАРГАЛТАЙ ГЭР БҮЛ
             </h2>
             <p className="text-gray-600 max-w-md">
               There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
             </p>
             <button className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600">Get it Now!</button>
           </div>
           <div className="md:w-1/2 mt-10 md:mt-0">
             <Image src="/withoutBackground.png" alt="Hero" width={400} height={400} className="mx-auto" />
           </div>
         </section>
  );
};

export default Hero;
