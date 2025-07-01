import Image from "next/image";

const Cards = () =>{
    return(
        <>
     <section className=" py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["#f97316", "#14b8a6", "#f43f5e"].map((bg, i) => (
            <div key={i} className={`h-[238px] rounded-lg p-6 text-white relative`} style={{ backgroundColor: bg }}>
              <Image className="absolute top-[-70px] right-[-5px]" src="/withoutBackground.png" alt="dog" width={230} height={250} />
              <h3 className="mt-4 font-bold">Suspendisse In Est Ante</h3>
              <button className="mt-2 bg-white text-black px-4 py-1 rounded text-sm">Explore us</button>
            </div>
          ))}
        </section>
        </>
    )
}
export default Cards