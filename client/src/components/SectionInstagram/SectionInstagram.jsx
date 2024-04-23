import Link from "next/link";
import Image from "next/image";
import aprender from './aprender.png';
import maimara from './maimara.png';

export default function SectionInstagram() {
  return (
    <section id="nuestros-productos" className="bg-white text-black p-8 min-h-screen w-full">
      <div className="flex flex-wrap justify-center items-center -mx-4">
        {/* Primera imagen */}
        <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 image-container">
          <Link href="https://aprenderemprendedores.com/" target="_blank">
            <div className="image-wrapper">
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
        <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 image-container">
          <Link href="https://maimaramates.com/" target="_blank">
            <div className="image-wrapper">
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

      <style jsx>{`
        .image-container {
          border: 2px solid black;
          transition: transform 0.2s ease-in-out;
        }
        .image-container:hover {
          transform: scale(1.05);
        }
        .image-wrapper {
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
