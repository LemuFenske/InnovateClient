import Description from "./Despription/Derscription"
import Image from "next/image"
import fondo from './Fondo.png'

export default function SectionProducts() {
    return (
      <section id="servicios" className="relative overflow-hidden bg-blue-100 text-black p-8 min-h-screen w-full">
         <Image
        src={fondo}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Fondo de Landing Page"
        className="absolute top-0 left-0 z-0"
      />
        <Description/>
      </section>
    )
  }