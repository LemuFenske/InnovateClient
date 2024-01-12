import Image from "next/image";
import logo from './favicon.png';

export default function Logo() {
  return (
    <div className="flex justify-center items-center h-50 w-50">
      <div className="mt-8 md:mt-0">
        <Image
          src={logo}
          width={450}  
          height={450} 
          quality={100}
          alt="Fondo de Landing Page"
        />
      </div>
    </div>
  );
}