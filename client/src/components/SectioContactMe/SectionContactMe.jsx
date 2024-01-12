import ContactMe from "./ContactForm/ContactForm"
import Image from "next/image"
import fondo from './FondoContact.png'


export default function SectioContactMe () {
    return (
        <section id="contactame" className="bg-gray-100 text-black min-h-screen w-full overflow-hidden relative">
          <Image
        src={fondo}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Fondo de Landing Page"
        className="absolute top-0 left-0 z-0"
      />
          <div className='flex flex-col justify-center items-center w-full min-h-screen'>
            <div className='h-screen w-full flex justify-center items-center'>
              <div className='flex justify-center w-full my-auto'>
                
                <div className="w-full">
                  <ContactMe/>
                </div>
              </div>
            </div>
          </div>
      </section>
    )
  }



