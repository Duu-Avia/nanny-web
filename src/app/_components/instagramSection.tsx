const InstagramSection = () => {
    return(
        <>
        <section className="py-20 px-4  text-center">
  <h2 className="text-2xl font-bold mb-4">Follow us on instagram</h2>
  <div className="flex justify-center mb-6">
    <img src="/instagram-badge.png" alt="Instagram" className="w-32" />
  </div>

  <div className="flex flex-wrap justify-center items-start gap-4  max-w-6xl mx-auto">
    {/* First Column */}
    <div className="space-y-4">
      <img src="/pinebaatarProfile.jpg" alt="1" className="rounded-xl w-full h-[300px] object-cover"/>
 
    </div>

    {/* Second Column */}
    <div className="space-y-4">
      <img src="/pinebaatarProfile.jpg" alt="2" className="rounded-xl w-full h-[240px] object-cover" />
      <img src="/pinebaatarProfile.jpg" alt="6" className="rounded-xl w-full h-[200px] object-cover" />
    </div>

    {/* Third Column */}
    <div className="space-y-4">
      <img src="/pinebaatarProfile.jpg" alt="3" className="rounded-xl w-full h-[180px] object-cover" />
      <img src="/pinebaatarProfile.jpg" alt="7" className="rounded-xl w-full h-[320px] object-cover" />
    </div>

    {/* Fourth Column */}
    <div className="space-y-4">
      <img src="/pinebaatarProfile.jpg" alt="4" className="rounded-xl w-full h-[300px] object-cover" />
    </div>
  </div>
</section>
        </>
    )}
export default InstagramSection;