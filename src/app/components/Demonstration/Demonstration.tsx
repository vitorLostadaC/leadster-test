import Image from "next/image"
import comparativeCTA from "@/assets/comparativo_img_CTA.png"
import stampRD from "@/assets/selo_RD.png"
import noCard from "@/assets/no-card-dark.webp"
import rating from "@/assets/rating.webp"

export const DemonstrationSection = () => {
  return (
    <section className="flex w-full justify-between bg-blue-100">
      <Image src={comparativeCTA} alt="Comparativo" />
      <div>
        <h2>
          Pronto para triplicar sua{" "}
          <span className="font-bold">Geração de Leads ?</span>
        </h2>
        <p>
          Criação e ativação em <span className="font-bold">4 minutos</span>
        </p>
        <hr />
        <div>
          <button>Ver demonstração</button>
          <Image src={stampRD} alt="Estampa" />
        </div>
        <p>
          <Image src={noCard} alt="Sem necessidade de cartão" />
          <span className="font-bold">Não</span> é necessário Cartão de Crédito
          | <Image src={rating} alt="Avaliações" />
          <span className="font-bold">4.9/5 média de satisfação</span>{" "}
        </p>
      </div>
    </section>
  )
}
