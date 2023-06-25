import { CardVideoPropsSchema } from "./CardVideo.schema"
import fakeThumbanil from "@/assets/thumbnail.png"
import Image from "next/image"

export const CardVideo = ({ title, thumbnail }: CardVideoPropsSchema) => {
  return (
    <div>
      <Image src={fakeThumbanil} alt="title" />
      <p>{title}</p>
    </div>
  )
}
