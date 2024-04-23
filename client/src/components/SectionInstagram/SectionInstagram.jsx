import Link from "next/link";
import Image from "next/image";
import aprender from './aprender.png';
import maimara from './maimara.png';

export default function SectionInstagram() {
  return (
    <section id="nuestros-productos" className="bg-white text-black p-8 min-h-screen w-full">
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {/* Primera imagen */}
        <div className="w-full md:w-1/3 overflow-hidden border-2 border-black rounded-md transform transition-transform hover:scale-105">
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
        <div className="w-full md:w-1/3 overflow-hidden border-2 border-black rounded-md transform transition-transform hover:scale-105">
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

