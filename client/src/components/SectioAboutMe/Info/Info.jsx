import Image from "next/image";
import logo from './INNOVATE.png'

export default function Info() {
  return (
    <div className="text-center md:text-left ml-4 mr-4 md:ml-20 mt-10 md:mt-0">
      <Image
        src={logo}
        layout=""
        objectFit=""
        quality={100}
        alt="Fondo de Landing Page"
        className="mb-4"
      />
      <h2 className="text-xl md:text-2xl md:ml-2 font-bold mb-4 text-white">SOFTWARE DEVELOPMENT</h2>
      
    </div>
  );
}



