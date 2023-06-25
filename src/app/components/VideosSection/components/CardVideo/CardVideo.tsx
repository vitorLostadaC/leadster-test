import { CardVideoPropsSchema } from "./CardVideo.schema"
import fakeThumbanil from "@/assets/thumbnail.png"
import playIcon from "@/assets/play-icon.svg"
import Image from "next/image"

export const CardVideo = ({ title, thumbnail }: CardVideoPropsSchema) => {
  return (
    <div className="group max-w-xs overflow-hidden rounded-xl shadow-xl hover:cursor-pointer">
      <div className="relative">
        <Image src={fakeThumbanil} alt="title" className="w-full" />
        <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-primary-400/40 opacity-0 transition-all duration-300 ease-in group-hover:opacity-100">
          <Image src={playIcon} alt="Assistir video" className="h-14  w-14" />
        </div>
      </div>

      <h3 className="p-5 font-bold group-hover:text-primary-500">{title}</h3>
    </div>
  )
}
