import Image from "next/image";

const AboutUs = () => {
    return(
        <>
              <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <Image src="/withoutBackground.png" alt="client" width={350} height={300} />
        <div>
          <h3 className="text-xl font-bold mb-4">Үйлчлүүлэгчийн сэтгэгдэл</h3>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="flex items-center gap-3">
            <Image src="/withoutBackground.png" alt="user" width={40} height={40} className="rounded-full" />
            <div>
              <p className="text-sm font-medium">Jonathan Doe</p>
              <p className="text-xs text-gray-400">Club member</p>
            </div>
          </div>
        </div>
      </section>
        </>
    )}
export default AboutUs;