import Image from 'next/image';
import innovate from './innovate.jpg'
import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center pt-20 pb-6 bg-white text-black">
      <div className="flex flex-wrap justify-center mt-4 mb-20 space-x-8">

        <div className='text-center md:text-left w-full md:w-1/2 px-10 md:px-20 mb-20 md:mb-0'>
          <Image
            src={innovate}
            layout=""
            objectFit=""
            quality={100}
            alt="Fondo de Landing Page"
            className=""
          />
          <h2 className='text-sky-900 font-bold text-xl md:text-2xl ml-2'>SOFTWARE DEVELOPMENT</h2>
        </div>


        <div className='w-full md:w-1/4 mb-8 md:mb-0'>
          <h3 className=" text-lg text-sky-900 font-bold mb-2">Realizamos:</h3>
          <ul className="list-disc text-left ml-12 md:ml-4">
            <li>Software de Gestión Personalizado.</li>
            <li>Landing Pages.</li>
            <li>Mantenimiento y Actualización.</li>
            <li>Webs Institucionales.</li>
            <li>Tiendas Online.</li>
          </ul>
        </div>

        <div className='w-full md:w-1/5 bg-red-500'>
          <h3 className="text-lg text-sky-900 font-bold mb-2">Redes Sociales</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://wa.me/543496506678" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://www.instagram.com/innovate_dev" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <p className=''>&copy; {currentYear} <span className='text-sky-800 font-bold'> INNOVATE</span>. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Copyright;


