import {useState} from "react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-16 py-6 shadow-md bg-white z-50">
      {/* Logo */}
      <a href="#">
        <img 
          src="/logo-luminia.png" 
          alt="luminia logo" 
          className="w-[170px] h-[32px] object-contain" />
      </a>
      {/* Menu */}
      <ul className="hidden xl:flex items-center space-x-10 font-semibold">
        <li>
          <a href="#products" className="hover:text-dGreen rounded-md transition-all">Products</a>
        </li>
        <li>
          <a href="#contacts" className="hover:text-dGreen rounded-md transition-all">Contact Us</a>
        </li>
        <li>
          <a href="https://wa.me/6285134458979" className="bg-dGreen text-white px-3 py-2 rounded-lg font-semibold border border-transparent hover:bg-white hover:text-dGreen hover:border-dGreen">Shop Now</a>
        </li>
      </ul>
      {/* Hamburger Menu */}
      <div className="xl:hidden block">
        <i className="bx bx-menu text-4xl cursor-pointer"
         onClick={() => setMenuOpen(!isMenuOpen)}>
        </i>

        <ul className={`absolute top-full left-0 w-full bg-white flex flex-col items-center py-2 text-lg text-left transform transition-all duration-300 ease-in-out z-40
          ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
        <li className="w-full pl-10 p-4 border-b border-gray-200 hover:bg-dGreen hover:text-white transition-all ">
          <a href="#products">Products</a>
        </li>
        <li className="w-full pl-10 p-4 border-b border-gray-200 hover:bg-dGreen hover:text-white transition-all">
          <a href="#contacts">Contact Us</a>
        </li>
        <li className="w-full pl-10 p-4  hover:bg-dGreen hover:text-white transition-all">
          <a href="https://wa.me/6285134458979">Shop Now</a>
        </li>
        </ul>
      </div>
    </nav>
  );
}
