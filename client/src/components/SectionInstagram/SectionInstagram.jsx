import Link from "next/link"


export default function SectionInstagram() {
    return (
        <section id="nuestros-productos" className="bg-white text-black p-8 min-h-screen w-full">
        <h1 className="text-3xl font-bold mb-4">Instagram</h1>
        <Link href="#sobre-mi">
          <h2 className="text-yellow-500 hover:underline">Ir a Sobre Mí</h2>
        </Link>
      </section>
    )
  }