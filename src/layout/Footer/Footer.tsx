import leaderlogo from "@/assets/logo.png"
import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="flex justify-center bg-gray-500 py-6">
      <section>
        <Image src={leaderlogo} alt="Leader logo" className="" />
        <p className="mt-1 text-xs">Transformando visitantes em clientes.</p>
      </section>
      <section></section>
    </footer>
  )
}
