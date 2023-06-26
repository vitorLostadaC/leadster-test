import assetHeader from "@/assets/asset-header.png"
import Image from "next/image"

export const SloganSection = () => {
  return (
    <section className="flex h-[500px] flex-col items-center justify-center gap-4 bg-blue-100">
      <p className="rounded-full rounded-bl-none border-2 border-solid border-primary-400 px-5 py-1 text-xs font-bold uppercase text-primary-400 md:text-sm">
        webinars Exclusivo
      </p>
      <h2 className="text-2xl sm:text-4xl md:text-5xl">Menos conversinha</h2>
      <h1 className="relative bg-gradient-to-br from-primary-400 to-primary-500 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl md:text-7xl">
        Mais Conversão
        <Image
          src={assetHeader}
          alt="decoração"
          className="absolute right-0 top-0 w-7 translate-x-3 sm:w-10 sm:translate-x-4"
        />
      </h1>
      <hr className="h-[1px] w-full max-w-[300px] border-none bg-gray-300 sm:max-w-lg md:max-w-xl" />
      <p className="max-w-xs text-center text-xs sm:text-sm md:text-base ">
        Conheça as estratégias que{" "}
        <span className="font-bold">mudaram o jogo</span> e como aplicá-las no
        seu negócio
      </p>
    </section>
  )
}
