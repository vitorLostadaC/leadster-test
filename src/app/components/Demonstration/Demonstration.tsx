import Image from "next/image"
import comparativeCTA from "@/assets/comparativo_img_CTA.png"
import stampRD from "@/assets/selo_RD.png"
import noCard from "@/assets/no-card-dark.webp"
import rating from "@/assets/rating.webp"
import montainDecoration from "@/assets/montainDecoration.svg"

export const DemonstrationSection = () => {
  return (
    <section className="relative  z-10 flex h-[600px] w-full items-center justify-center gap-10 bg-blue-100">
      <Image
        src={comparativeCTA}
        alt="Comparativo"
        className="hidden h-5/6 w-auto xl:block"
      />

      <div className="flex flex-col gap-3">
        <div>
          <h3 className="max-w-[405px] text-4xl">
            Pronto para triplicar sua{" "}
            <span className="font-bold">Geração de Leads ?</span>
          </h3>
          <p className="mt-2">
            Criação e ativação em <span className="font-bold">4 minutos</span>
          </p>
        </div>

        <hr className="border-node h-[2px] bg-gray-400" />

        <div className="flex items-center gap-4">
          <button className="rounded-full bg-primary-400 px-7 py-3 text-white">
            Ver demonstração
          </button>
          <Image src={stampRD} alt="Estampa" className="h-12 w-auto" />
        </div>

        <p className="flex items-center justify-center gap-1 text-xs">
          <Image src={noCard} alt="Sem necessidade de cartão" />
          <span className="font-bold">Não</span> é necessário Cartão de Crédito
          | <Image src={rating} alt="Avaliações" className="h-3 w-auto" />
          <span className="font-bold">4.9/5 média de satisfação</span>{" "}
        </p>
      </div>

      <Image
        src={montainDecoration}
        alt="decoração"
        className="absolute bottom-0 left-0 -z-10 -translate-x-1/3 "
      />
      {/* <div className="abosulte h-80 w-80 rotate-45 bg-blue-200" /> */}
    </section>
  )
}
