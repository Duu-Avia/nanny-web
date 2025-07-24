// src/app/_components/aboutUs.tsx
const staff = [
  { name: 'Pinebaatar', role: 'Nanny Specialist', img: '/pinebaatarProfile.jpg' },
  { name: 'Sarah L.', role: 'Hiring Manager', img: '/Group1.png' },
  { name: 'Emily D.', role: 'Support Lead', img: '/withoutBackground.png' }
];

const Statistic = () => {
  return (
<section className="bg-white py-20 px-6 text-center">
  <h2 className="text-3xl md:text-4xl font-serif text-[#0f172a] mb-16">
    International Nanny Placement Agency
  </h2>

  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center text-[#0f172a] text-center divide-y md:divide-y-0 md:divide-x divide-[#f3c363]">
    
    {/* 1. Agencies */}
    <div className="flex-1 px-6 py-10">
      <p className="text-5xl font-bold">7</p>
      <p className="italic mt-2">Agencies in the world</p>
    </div>

    {/* 2. Nannies */}
    <div className="flex-1 px-6 py-10">
      <p className="text-sm uppercase text-gray-500 mb-1">More than</p>
      <p className="text-5xl font-bold">50.000</p>
      <p className="italic mt-2">Nannies registered</p>
    </div>

    {/* 3. Users */}
    <div className="flex-1 px-6 py-10">
      <p className="text-sm uppercase text-gray-500 mb-1">More than</p>
      <p className="text-5xl font-bold">3.000.000</p>
      <p className="italic mt-2">users a year</p>
    </div>
  </div>
</section>
  );
};

export default Statistic;
