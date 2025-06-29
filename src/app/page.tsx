import Image from "next/image";
import Header from "./_components/header";
import Footer from "./_components/footer";
import Hero from "./_components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF5EF] to-[#F7F0EB] text-[#2C2C2C]">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-16 px-4 text-center bg-[#FAF5EF]">
        <h2 className="text-3xl font-semibold mb-10">
          International Nanny Placement Agency
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div>
            <p className="text-5xl font-bold">7</p>
            <p className="text-md italic mt-2 text-[#5C5248]">Agencies in the world</p>
          </div>
          <div>
            <p className="text-sm text-[#8C837B]">More Than</p>
            <p className="text-5xl font-bold">50,000</p>
            <p className="text-md italic mt-2 text-[#5C5248]">Nannies registered</p>
          </div>
          <div>
            <p className="text-sm text-[#8C837B]">More than</p>
            <p className="text-5xl font-bold">3,000,000</p>
            <p className="text-md italic mt-2 text-[#5C5248]">Users a year</p>
          </div>
        </div>
      </section>

      {/* Agency Locations */}
      <section className="py-16 px-4 bg-[#F7F4F1]">
        <h3 className="text-2xl font-semibold text-center mb-10">
          Mom - Nanny Center Mongolia үйл ажиллагаа явуулдаг агентлагуудын байршил
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "New York – USA",
            "London – UK",
            "Dubai – UAE",
            "Paris – France",
            "Los Angeles – USA",
            "Rolle – Switzerland",
          ].map((location, i) => (
            <div
              key={i}
              className="border border-[#E3DCD5] p-6 shadow-sm hover:shadow-md transition rounded-md bg-white"
            >
              <h4 className="text-lg font-medium mb-2">{location}</h4>
              <p className="text-sm text-[#5C5248]">+1 (555) 123-4567</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recruiters Section */}
      <section className="py-16 px-4 bg-[#F1EDE6] text-center">
        <h3 className="text-2xl font-semibold mb-8">
          Our Recruiters are pleased to assist you in finding the right nanny
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              className="rounded overflow-hidden shadow-sm bg-white border border-[#E3DCD5]"
            >
              <div className="w-full h-72 bg-[#F0EAE6] flex items-center justify-center text-[#A09388] text-2xl">
                Photo
              </div>
              <div className="p-4">
                <h4 className="text-md font-medium text-[#3A2E25]">Recruiter #{id}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
