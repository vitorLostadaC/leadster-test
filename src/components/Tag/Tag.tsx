import colors from "tailwindcss/colors"
import React from "react"
import { setLightness } from "polished"
import { TagPropsSchema } from "./Tag.schema"

export const Tag = ({
  Icon,
  name,
  href,
  color = colors.gray[500]
}: TagPropsSchema) => {
  return (
    <a
      target="_blank"
      href={href}
      className="flex h-7 cursor-pointer items-center gap-1 overflow-hidden rounded-md text-xs"
      style={{ backgroundColor: color }}
    >
      <div className="flex h-full w-full items-center bg-black/5 px-1">
        <Icon
          size={20}
          color={setLightness(0.5, color)}
          className="brightness-75"
        />
      </div>
      <p style={{ color: setLightness(0.3, color) }} className="pr-1 ">
        {name}
      </p>
    </a>
  )
}
