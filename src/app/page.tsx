import Image from "next/image";
import Header from "./_components/header";

export default function Home() {
  return (

    <div className="min-h-screen bg-white text-[#12233E] ">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://www.nannies.agency/_next/image?url=%2Fimages%2Fmain.webp&w=1920&q=75)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-2xl md:text-4xl  mb-4">TRUSTED CARE HAPPY FAMILY
ИТГЭЛТЭЙ ХАЛАМЖ </h1>
          <p className="text-lg md:text-xl max-w-2xl">АЗЖАРГАЛТАЙ ГЭР БҮЛ</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-10">International Nanny Placement Agency</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div>
            <p className="text-5xl ">7</p>
            <p className="text-md italic mt-2">Agencies in the world</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">More Than</p>
            <p className="text-5xl ">50.000</p>
            <p className="text-md italic mt-2">Nannies registered</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">More than</p>
            <p className="text-5xl ">3.000.000</p>
            <p className="text-md italic mt-2">Users a year</p>
          </div>
        </div>
      </section>

      {/* Agency Locations */}
      <section className="py-16 px-4 bg-[#F7F5F2]">
        <h3 className="text-2xl font-semibold text-center mb-10">Global Agency Locations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            'New York – USA',
            'London – UK',
            'Dubai – UAE',
            'Paris – France',
            'Los Angeles – USA',
            'Rolle – Switzerland'
          ].map((location, i) => (
            <div key={i} className="border p-6 shadow hover:shadow-lg transition rounded-md bg-white">
              <h4 className="text-lg  mb-2">{location}</h4>
              <p>+1 (555) 123-4567</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recruiters Section */}
      <section className="py-16 px-4 bg-[#f9f9f9] text-center">
        <h3 className="text-2xl  mb-8">Our Recruiters are pleased to assist you to find the right nanny for your family</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((id) => (
     <div key={id} className="rounded overflow-hidden shadow bg-white">
  <div className="w-full h-72 bg-gray-200 flex items-center justify-center text-gray-500 text-2xl">
    Photo
  </div>
  <div className="p-4">
    <h4 className=" text-md">Recruiter #{id}</h4>
  </div>
</div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FEF3E2] text-black py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Mom - Nanny Center Mongolia.</p>
      </footer>
    </div>
  );
}

  