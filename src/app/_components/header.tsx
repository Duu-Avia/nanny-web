const Header = () => {
    return (
      <header className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-[#1e1e2f]">Mom - Nanny Center Mongolia</h1>
        <nav className="space-x-4 text-sm text-gray-600">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">About</a>
          <a href="#" className="hover:text-black">Shop</a>
          <a href="#" className="hover:text-black">Blog</a>
          <a href="#" className="hover:text-black">Category</a>
          <a href="#" className="hover:text-black">Contact</a>
        </nav>
      </header>
    )
}
export default Header;
