'use client';
import { useState } from 'react';
import { FiArrowLeft} from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="z-40 w-full flex items-center h-14 text-xl justify-end relative font-sans">
      <div className="w-full">
        <div className="flex items-center justify-end">
          <div className="hidden sm:flex justify-end items-center">
            <Link href="#contactame" className="mx-3 transform transition text-white hover:text-gray-500">
              Contacto
            </Link>
            <Link href="#servicios" className="mx-3 transform transition text-white hover:text-gray-500">
              Servicios
            </Link>
            <a href="https://wa.me/543496506678" target="_blank" rel="noopener noreferrer" className='mx-3 transform transition text-white hover:text-gray-500'>
              <FaWhatsapp size={20} />
            </a>
            <a href="https://www.instagram.com/innovate_dev" target="_blank" rel="noopener noreferrer" className='mx-3 transform transition text-white hover:text-gray-500'>
              <FaInstagram size={20} />
            </a>
          </div>
          <div className="sm:hidden">
          <button className="mx-3 transform text-white transition hover:text-gray-500" onClick={toggleMenu}>
              ☰
            </button>
          </div>
        </div>
        {showMenu && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={closeMenu}>
          <div className="flex flex-col bg-blue-200 ml-auto w-1/2 h-full">
            <button className="ml-3 mr-auto my-2 transform transition hover:text-gray-500" onClick={toggleMenu}>
              <FiArrowLeft size={20} />
            </button>
            <div className="border-t border-gray-400 w-full"></div>
            <Link
              href="#contactame"
              className="mr-3 ml-auto my-2 transform transition hover:text-gray-500"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
            <div className="border-t border-gray-400 w-full"></div>
            <Link
              href="#servicios"
              className="mr-3 ml-auto my-2 transform transition hover:text-gray-500"
              onClick={toggleMenu}
            >
              Servicios
            </Link>
            <div className="border-t border-gray-400 w-full"></div>
            <div className='flex mr-3 ml-auto mt-auto mb-3'>
              <a href="https://wa.me/543496506678" target="_blank" rel="noopener noreferrer" className='mx-3 transform transition hover:text-gray-500'>
                <FaWhatsapp size={20} />
              </a>
              <a href="https://www.instagram.com/innovate_dev" target="_blank" rel="noopener noreferrer" className='mx-3 transform transition hover:text-gray-500'>
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        
        )}
      </div>
    </div>
  );
}


