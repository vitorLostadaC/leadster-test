import { GroupLinksPropsSchema } from "./GroupLinks.schema"

/**
 * Render a title and below renders your links
 */
export const GroupLinks = ({ groupName, links }: GroupLinksPropsSchema) => {
  return (
    <div>
      <h6 className="font-bold">{groupName}</h6>

      <div className="mt-6 flex flex-col gap-4 text-gray-400">
        {links.map((link) => (
          <a href={link.href} key={link.name}>
            {link.name}
          </a>
        ))}
      </div>
    </div>
  )
}
