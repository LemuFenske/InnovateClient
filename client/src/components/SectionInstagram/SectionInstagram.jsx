import Link from "next/link";
import Image from "next/image";
import aprender from './aprender.png';
import maimara from './maimara.png';
import fondo from './Fondo.png'

export default function SectionInstagram() {
  return (
    <section id="nuestros-productos" className="relative bg-white text-black p-8 w-full">
      <Image
        src={fondo}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Fondo de Landing Page"
        className="absolute top-0 left-0 z-0"
      />
       <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-center text-sky-800 relative z-10 my-2">
       ✨ ALGUNOS PROYECTOS ✨
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {/* Primera imagen */}
        <div className="w-full md:w-5/12 overflow-hidden border-2 border-black rounded-md transform transition-transform hover:scale-105">
          <Link href="https://aprenderemprendedores.com/" target="_blank">
            <div>
              <Image
                src={aprender}
                quality={100}
                alt="Imagen 1"
              />
            </div>
          </Link>
        </div>
        {/* Segunda imagen */}
        <div className="w-full md:w-5/12 overflow-hidden border-2 border-black rounded-md transform transition-transform hover:scale-105">
          <Link href="https://maimaramates.com/" target="_blank">
            <div>
              <Image
                src={maimara}
                quality={100}
                alt="Imagen 3"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

