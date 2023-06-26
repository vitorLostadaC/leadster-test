import leaderlogo from "@/assets/logo.png"
import Image from "next/image"
import { GroupLinksPropsSchema } from "../../components/GroupLinks/GroupLinks.schema"
import { GroupLinks } from "@/components/GroupLinks/GroupLinks"
import { Linkedin, Facebook, Instagram } from "lucide-react"
import { ActionIconPropsSchema } from "@/components/ActionIcon/ActionIcon.schema"
import { ActionIcon } from "@/components/ActionIcon/ActionIcon"
import { ContactTextPropsSchema } from "./components/ContactText/ContactText.schema"
import { ContactText } from "./components/ContactText/ContactText"

const groupsLinks: GroupLinksPropsSchema[] = [
  {
    groupName: "Links Principais",
    links: [
      {
        name: "Home",
        href: "https://www.linkedin.com/in/vitorlostada/"
      },
      {
        name: "Ferramenta",
        href: "https://www.linkedin.com/in/vitorlostada/"
      },
      {
        name: "Preços",
        href: "https://www.linkedin.com/in/vitorlostada/"
      },
      {
        name: "Contato",
        href: "https://www.linkedin.com/in/vitorlostada/"
      }
    ]
  },
  {
    groupName: "Cases",
    links: [
      {
        name: "Geração de Leads B2B",
        href: "https://www.linkedin.com/in/vitorlostada/"
      },
      {
        name: "Geração de Leads em Software",
        href: "https://www.linkedin.com/in/vitorlostada/"
      },
      {
        name: "Geração de Leads em Imobiliária",
        href: "https://www.linkedin.com/in/vitorlostada/"
      },
      {
        name: "Cases de Sucesso",
        href: "https://www.linkedin.com/in/vitorlostada/"
      }
    ]
  },
  {
    groupName: "Materiais",
    links: [
      {
        name: "Blog",
        href: "https://www.linkedin.com/in/vitorlostada/"
      },
      {
        name: "Parceria com Agências",
        href: "https://www.linkedin.com/in/vitorlostada/"
      },
      {
        name: "Guia Definitivo do Marketing",
        href: "https://www.linkedin.com/in/vitorlostada/"
      },
      {
        name: "Materiais Gratuitos",
        href: "https://www.linkedin.com/in/vitorlostada/"
      }
    ]
  }
]

const socialMidias: ActionIconPropsSchema[] = [
  {
    Icon: Linkedin,
    link: "https://www.linkedin.com/in/vitorlostada/"
  },
  {
    Icon: Facebook,
    link: "https://www.linkedin.com/in/vitorlostada/"
  },
  {
    Icon: Instagram,
    link: "https://www.linkedin.com/in/vitorlostada/"
  }
]

const contacts: ContactTextPropsSchema[] = [
  {
    title: "E-mail",
    text: "contato@leadset.com.br"
  },
  {
    title: "Telefone",
    text: "(42) 98828-9851"
  }
]

export const Footer = () => {
  return (
    <footer className="mx-auto flex w-full flex-col items-center gap-12 py-6 text-sm">
      {/* Logo */}
      <section>
        <Image src={leaderlogo} alt="Leader logo" className="" />
        <p className="mt-1 text-xs">Transformando visitantes em clientes.</p>
      </section>

      {/* Links */}
      <section className="flex w-full flex-wrap items-center justify-center gap-6  lg:max-w-4xl lg:justify-between xl:max-w-5xl">
        {groupsLinks.map((groupLink) => (
          <GroupLinks key={groupLink.groupName} {...groupLink} />
        ))}

        <div className="flex flex-col gap-3 text-center lg:text-left">
          <h6 className="font-bold">Siga as Leadster</h6>
          <div className="flex justify-center gap-3 lg:justify-start">
            {socialMidias.map((socialMedia) => (
              <ActionIcon key={socialMedia.link} {...socialMedia} />
            ))}
          </div>
          <div className="font-xs flex flex-col gap-1 ">
            {contacts.map((contact) => (
              <ContactText key={contact.title} {...contact} />
            ))}
          </div>
        </div>
      </section>

      {/* Copyright */}
      <section className="w-full text-gray-400">
        <hr className="mb-6 w-full" />
        <div className="mx-auto flex items-center justify-between sm:flex-col md:max-w-2xl lg:max-w-4xl lg:flex-row xl:max-w-5xl">
          <p>
            Copyright © 2015 - 2022 Todos os direitos reservados |{" "}
            <a href="" className="text-cyan-500">
              Leadster
            </a>
          </p>
          <p>
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
            Termos de uso
          </p>
        </div>
      </section>
    </footer>
  )
}
