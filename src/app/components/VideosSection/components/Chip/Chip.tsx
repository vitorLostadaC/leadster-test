import { ChipPropsSchema } from "./Chip.schema"

export const Chip = ({ name, selected, onClick, id }: ChipPropsSchema) => {
  return (
    <button
      className={`rounded-full border-[1px] border-solid px-3 py-[2px]  ${
        selected
          ? "border-primary-400 bg-primary-400 text-white"
          : "border-gray-700 hover:border-primary-400 hover:text-primary-400"
      }`}
      onClick={() => onClick(id)}
    >
      {name}
    </button>
  )
}
