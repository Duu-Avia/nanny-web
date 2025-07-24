const Cards = () => {
    return  (
        <>
        <section className="pt-30 bg-[#f6f9fc] py-20 px-6" id="team">
  <div className=" mx-auto text-center">
    <h2 className="text-3xl md:text-4xl text-[#001731] mb-12 max-w-7xl mx-auto px-4">
     Манай хамт олон нь танай гэр бүлд тохирох асрагч олоход тань туслахдаа таатай байна
    </h2>
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {[
        {
          name: 'Morgan Richez',
          title: 'Co-founder',
          img: '/pinebaatarProfile.jpg',
          flags: ['/flags/fr.svg', '/flags/uk.svg'],
        },
        {
          name: 'Laurine Mallet',
          title: 'Co-Founder',
          img: '/pinebaatarProfile.jpg',
          flags: ['/flags/fr.svg', '/flags/uk.svg'],
        },
        {
          name: 'Jonathan de Vanderbilt',
          title: 'Recruiter',
          img: '/pinebaatarProfile.jpg',
          flags: ['/flags/es.svg', '/flags/us.svg'],
        },
        {
          name: 'Brynn Lambert',
          title: 'Recruiter',
          img: '/pinebaatarProfile.jpg',
          flags: ['/flags/us.svg'],
        },
        {
          name: 'Antoine Corde',
          title: 'Office Manager',
          img: '/pinebaatarProfile.jpg',
          flags: ['/flags/fr.svg', '/flags/uk.svg'],
        },
      ].map(({ name, title, img, flags }) => (
        <div
          key={name}
          className="rounded-2xl bg-white p-4 shadow-md flex flex-col items-center"
        >
          <img
            src={img}
            alt={name}
            className="rounded-2xl w-full h-[320px] object-cover mb-4"
          />
          <h3 className="font-semibold text-lg text-[#0f172a]">{name}</h3>
          <p className="text-sm text-gray-600">{title}</p>
          <div className="flex gap-2 mt-2">
            {flags.map((flag, i) => (
              <img key={i} src={flag} alt="flag" className="h-5 w-6 object-contain" />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
        </>
    )
}

export default Cards;