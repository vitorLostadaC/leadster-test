import { ActionIconPropsSchema } from "./ActionIcon.schema"

export const ActionIcon = ({ Icon, link }: ActionIconPropsSchema) => {
  return (
    <a className="rounded-full bg-gray-100 p-2" href={link}>
      <Icon className="text-gray-400" size={20} />
    </a>
  )
}
