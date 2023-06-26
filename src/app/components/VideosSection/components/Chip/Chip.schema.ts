export interface ChipPropsSchema {
  name: string
  id: string
  onClick: (categoryId: string) => void
  selected: boolean
}
