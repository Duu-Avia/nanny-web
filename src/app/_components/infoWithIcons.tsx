import Image from "next/image"

const InfoWithIcons = ()=>{
    return(
        <>
      <section className="px-6 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <Image src="/withoutBackground.png" alt="girl" width={350} height={350} />
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Lorem Ipsum Dolor Sit Amet Consectetur</h3>
          {['Perfect food', 'Nutritious', 'Healthy pet food'].map((text, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="bg-teal-200 p-2 rounded-full"></div>
              <div>
                <h4 className="font-semibold">{text}</h4>
                <p className="text-sm text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
        </>
    )
}
export default InfoWithIcons