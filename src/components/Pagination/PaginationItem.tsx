interface PaginationItemPropsSchema {
  pageNumber: number
  isSelected?: boolean
  selectPage: (page: number) => void
}

export function PaginationItem({
  isSelected = false,
  pageNumber,
  selectPage
}: PaginationItemPropsSchema) {
  if (isSelected) return <button disabled>{pageNumber}</button>

  return <button onClick={() => selectPage(pageNumber)}>{pageNumber}</button>
}
