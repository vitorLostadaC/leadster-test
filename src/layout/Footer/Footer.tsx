import leaderlogo from "@/assets/logo.png"
import Image from "next/image"
import { GroupLinksProps } from "../../components/GroupLinks/GroupLinks.schema"
import { GroupLinks } from "@/components/GroupLinks/GroupLinks"
import { Linkedin, Facebook, Instagram } from "lucide-react"
import { ActionIconPropsSchema } from "@/components/ActionIcon/ActionIcon.schema"
import { ActionIcon } from "@/components/ActionIcon/ActionIcon"
import { ContactTextPropsSchema } from "./components/ContactText/ContactText.schema"
import { text } from "stream/consumers"
import { ContactText } from "./components/ContactText/ContactText"

const groupsLinks: GroupLinksProps[] = [
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
    title: "E-mail:",
    text: "contato@leadset.com.br"
  },
  {
    title: "Telefone:",
    text: "(42) 98828-9851"
  }
]

export const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-5xl flex-col items-center py-6 text-sm">
      <section>
        <Image src={leaderlogo} alt="Leader logo" className="" />
        <p className="mt-1 text-xs">Transformando visitantes em clientes.</p>
      </section>

      <section className="flex w-full justify-between">
        {groupsLinks.map((groupLink) => (
          <GroupLinks key={groupLink.groupName} {...groupLink} />
        ))}

        <div className="flex flex-col gap-3">
          <h6 className="font-bold">Siga as Leadster</h6>
          <div className="flex gap-3">
            {socialMidias.map((socialMedia) => (
              <ActionIcon key={socialMedia.link} {...socialMedia} />
            ))}
          </div>
          <div className="font-xs">
            {contacts.map((contact) => (
              <ContactText key={contact.title} {...contact} />
            ))}
          </div>
        </div>
      </section>
    </footer>
  )
}
