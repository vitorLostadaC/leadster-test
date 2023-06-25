export interface GroupLinksPropsSchema {
  groupName: string
  links: GroupLinkSchema[]
}

export interface GroupLinkSchema {
  name: string
  href: string
}
