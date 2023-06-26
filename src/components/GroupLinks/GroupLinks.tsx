import { GroupLinksPropsSchema } from "./GroupLinks.schema"

/**
 * Render a title and below renders your links
 */
export const GroupLinks = ({ groupName, links }: GroupLinksPropsSchema) => {
  return (
    <div>
      <h6 className="text-center font-bold lg:text-left">{groupName}</h6>

      <div className="mt-6 flex flex-col items-center gap-4 text-gray-400 lg:items-start">
        {links.map((link) => (
          <a href={link.href} key={link.name}>
            {link.name}
          </a>
        ))}
      </div>
    </div>
  )
}
