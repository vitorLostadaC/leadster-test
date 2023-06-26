import { ContactTextPropsSchema } from "./ContactText.schema"

/**
 * Renders Contact text with custom colors in this format
 * @example `{title}`: `{text}`
 */
export const ContactText = ({ title, text }: ContactTextPropsSchema) => {
  return (
    <p>
      {title}: <span className="text-gray-400">{text}</span>
    </p>
  )
}
