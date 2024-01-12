import React from 'react';
import Image from 'next/image';
import fondo from './fondo.png'
import Link from 'next/link';

export default function Description() {
  return (
    <div className="mx-0 lg:mx-20 h-full flex flex-col justify-center z-10 relative">
      <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-center text-sky-800">
        INNOVATE 🚀
      </h2>
      <p className="text-gray-900 mb-8 md:mb-12 text-center">
        Descubre la diferencia con nuestro software especializado. En Innovate, creamos soluciones tecnológicas disruptivas para gestionar tu empresa de manera eficiente.
      </p>

      <div className="relative mb-8 md:mb-12">
        <div className="">
          <Image
            src={fondo}
            alt="Fondo de imagen"
            layout="fill"
            objectFit="cover"
            quality={100}
            className='rounded-3xl'
          />
        </div>
        <div className="absolute inset-0 opacity-80"></div>

        <div className="z-10 text-white relative p-6">
          <h3 className="text-2xl text-center md:text-3xl font-bold mb-4">Nuestros servicios:</h3>
          <ul className="list-disc list-inside md:ml-20">
            <li className="mb-2">
              <span className="font-bold">Software de Gestión Personalizado:</span> Adaptamos cada solución a las necesidades específicas de tu negocio.
            </li>
            <li className="mb-2">
              <span className="font-bold">Landing Pages Impactantes:</span> Diseño cautivador que convierte visitantes en clientes.
            </li>
            <li className="mb-2">
              <span className="font-bold">Mantenimiento y Actualización de Webs:</span> Garantizamos el funcionamiento óptimo de tu sitio.
            </li>
            <li className="mb-2">
              <span className="font-bold">Webs Institucionales:</span> Diseño profesional para representar tu institución.
            </li>
            <li>
              <span className="font-bold">Tiendas Online:</span> Experiencia de compra online fácil y segura.
            </li>
          </ul>
          <div className='text-center mt-4'>
          <Link href="#contactame" passHref >
            <button className="mx-3 transform font-bold transition border border-white text-white hover:bg-white hover:text-black mx-auto px-4 py-2 rounded-2xl">
              Contactanos
            </button>
          </Link>
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg md:text-xl font-bold text-center mb-4 ">
          Opta por la excelencia con Innovate. 🌟
        </p>
      </div>
    </div>
  );
}

// 💡