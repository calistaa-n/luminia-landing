import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <section id="contacts" className="bg-[#FFFDF4] py-8 md:py-15 flex flex-col items-center justify-center mt-8 md:mt-15">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-dGreen">Let's Talk Glow</h2>
        <p className="font-bold pt-4 md:pt-7 text-lg md:text-xl">Find us on</p>
        <div className="flex flex-wrap justify-center space-x-6 mt-4">
          <a href="https://www.tiktok.com/@luminia.bali" className="flex items-center space-x-2 hover:text-dGreen hover:font-bold group mb-4 md:mb-0">
            <FaTiktok className="text-2xl md:text-3xl" />
            <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-dGreen after:transition-all after:duration-300 group-hover:after:w-full text-sm md:text-base">luminia.bali</span>
          </a>
          <a href="https://www.instagram.com/luminia.bali" className="flex items-center space-x-2 hover:text-dGreen hover:font-bold group mb-4 md:mb-0">
            <FaInstagram className="text-2xl md:text-3xl" />
            <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-dGreen after:transition-all after:duration-300 group-hover:after:w-full text-sm md:text-base">luminia.bali</span>
          </a>
          <a href="https://wa.me/6285134458979" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-dGreen hover:font-bold group mb-4 md:mb-0">
            <FaWhatsapp className="text-2xl md:text-3xl" />
            <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-dGreen after:transition-all after:duration-300 group-hover:after:w-full text-sm md:text-base">+62 851-3445-8979</span>
          </a>
        </div>
      </div>
      <footer className="text-center py-3 mt-12 md:mt-16">
        <p className="text-gray-400 text-sm md:text-base">©2025 Luminia. all rights reserved</p>
      </footer>
    </section>
  );
}
