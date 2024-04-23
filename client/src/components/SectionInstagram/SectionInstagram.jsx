import Link from "next/link";
import Image from "next/image";
import aprender from './aprender.png';
import brian from './brian.png';
import maimara from './maimara.png';

export default function SectionInstagram() {
  return (
    <section id="nuestros-productos" className="bg-white text-black p-8 min-h-screen w-full">
      <div className="flex flex-wrap justify-center items-center -mx-4">
        {/* Primera imagen */}
        <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
          <Link href="https://aprenderemprendedores.com/">
            <div>
              <Image
                src={aprender}
                width={450}
                height={450}
                quality={100}
                alt="Imagen 1"
              />
            </div>
          </Link>
        </div>
        {/* Segunda imagen */}
        <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
          <Link href="https://brianyost.vercel.app/">
            <div>
              <Image
                src={brian}
                width={450}
                height={450}
                quality={100}
                alt="Imagen 2"
              />
            </div>
          </Link>
        </div>
        {/* Tercera imagen */}
        <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
          <Link href="https://maimaramates.com/">
            <div>
              <Image
                src={maimara}
                width={450}
                height={450}
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
