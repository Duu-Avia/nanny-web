const Footer = () =>{
    return(
     <footer className=" border-t border-gray-200 text-sm text-gray-600">
  <div className="max-w-7xl mx-auto px-6 py-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
      
      {/* Contact Us */}
      <div>
        <h3 className="text-black font-semibold mb-4">Contact us</h3>
        <p>184 Main Rd, Omuk city<br/>Tomuk state, Germany</p>
        <p className="mt-2">contact@company.com</p>
        <p className="mt-1">+123 456 7890</p>
        <div className="flex gap-3 mt-3 text-xl">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>

      {/* Info Columns */}
      <div>
        <h3 className="text-black font-semibold mb-4">Information</h3>
        <ul className="space-y-2">
          <li>Store Location</li>
          <li>Latest Posts</li>
          <li>Pet Guide</li>
          <li>About Us</li>
          <li>FAQs</li>
        </ul>
      </div>

      <div>
        <h3 className="text-black font-semibold mb-4">Support</h3>
        <ul className="space-y-2">
          <li>Contact us</li>
          <li>Privacy Policy</li>
          <li>Shipping & Delivery</li>
          <li>Terms & Conditions</li>
          <li>Returns & Exchanges</li>
          <li>Payment</li>
        </ul>
      </div>

      <div>
        <h3 className="text-black font-semibold mb-4">Community</h3>
        <ul className="space-y-2">
          <li>Celebrations</li>
          <li>Events</li>
          <li>Club</li>
          <li>Career</li>
          <li>Affiliate program</li>
        </ul>
      </div>

      <div>
        <h3 className="text-black font-semibold mb-4">Quick links</h3>
        <ul className="space-y-2">
          <li>How to buy</li>
          <li>Payment</li>
          <li>Delivery</li>
          <li>Gift receipt</li>
          <li>Recalled items</li>
          <li>My account</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-200 mt-10 pt-6 text-center text-xs text-gray-500">
      © Copyright mypetclub 2021 | All Rights Reserved | Company Reg No. 10812528 | Impressum
    </div>
  </div>
</footer>
    )
}
export default Footer;