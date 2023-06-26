import assetHeader from "@/assets/asset-header.png"
import Image from "next/image"

export const SloganSection = () => {
  return (
    <section className="flex h-[500px] flex-col items-center justify-center gap-4 bg-blue-100">
      <p className="rounded-full rounded-bl-none border-2 border-solid border-primary-400 px-5 py-1 text-sm font-bold uppercase text-primary-400">
        webinars Exclusivo
      </p>
      <h2 className="text-5xl">Menos conversinha</h2>
      <h1 className="relative bg-gradient-to-br from-primary-400 to-primary-500 bg-clip-text text-7xl font-bold text-transparent">
        Mais Conversão
        <Image
          src={assetHeader}
          alt="decoração"
          className="absolute right-0 top-0 translate-x-4"
        />
      </h1>
      <hr className="h-[1px] w-full max-w-xl border-none bg-gray-300" />
      <p>
        Conheça as estratégias que{" "}
        <span className="font-bold">mudaram o jogo</span> e como aplicá-las no
        seu negócio
      </p>
    </section>
  )
}
