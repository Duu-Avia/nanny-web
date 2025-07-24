// src/app/_components/footer.tsx
const Footer = () => {
  return (
          <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2025 Nanny Agency. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
