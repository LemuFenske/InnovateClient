import React from 'react';
import Image from 'next/image';
import fondo from './FondoAbout.jpg';
import NavBar from '../NavBar/NavBar';
import Info from './Info/Info';
import Logo from './Logo/Logo';
import Servicios from './Servicios/Servicios';

const SectionAboutMe = () => {
  return (
    <section id="sobre-mi" className="relative min-h-[115vh] w-full overflow-hidden text-black">
      <Image
        src={fondo}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Fondo de Landing Page"
        className="absolute top-0 left-0 z-0"
      />
      <NavBar />
      <div className='relative flex flex-col justify-center items-center w-full min-h-screen'>
        <div className='min-h-screen w-full'>
          <div className='flex flex-wrap justify-center items-center w-full h-2/4'>
            <div className="w-full sm:w-1/2 mb-4">
              <Info />
            </div>
            <div className="w-full md:w-1/2">
              <Logo />
            </div>
          </div>
          <div className='relative bottom-0 left-0 w-full mt-10 md:mt-40'>
        <div className="">
          <Servicios />
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutMe;


