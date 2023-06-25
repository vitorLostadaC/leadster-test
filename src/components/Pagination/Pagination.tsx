import { PaginationItem } from "./PaginationItem"

interface PaginationPropsSchema {
  totalNumberPages: number
  quantityItemsPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const SIBLINGS_COUNT = 1

/**
 * return interval pages
 * @example generatePagesArray(2, 6) = [3, 4, 5, 6]
 */
function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter((page) => page > 0)
}

export function Pagination({
  totalNumberPages,
  currentPage = 1,
  onPageChange,
  quantityItemsPerPage = 10
}: PaginationPropsSchema) {
  const lastPage = Math.floor(totalNumberPages / quantityItemsPerPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - SIBLINGS_COUNT, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + SIBLINGS_COUNT, lastPage)
        )
      : []

  return (
    <div className="flex gap-2">
      {currentPage > 1 + SIBLINGS_COUNT && (
        <>
          <PaginationItem selectPage={onPageChange} pageNumber={1} />
          {currentPage > 2 + SIBLINGS_COUNT && (
            <p className="text-gray-300"> ...</p>
          )}
        </>
      )}

      {previousPages.length > 0 &&
        previousPages.map((page) => (
          <PaginationItem
            selectPage={onPageChange}
            key={page}
            pageNumber={page}
          />
        ))}

      <PaginationItem
        selectPage={onPageChange}
        pageNumber={currentPage}
        isSelected
      />

      {nextPages.length > 0 &&
        nextPages.map((page) => (
          <PaginationItem
            selectPage={onPageChange}
            key={page}
            pageNumber={page}
          />
        ))}

      {currentPage + SIBLINGS_COUNT < lastPage && (
        <>
          {currentPage + 1 + SIBLINGS_COUNT < lastPage && (
            <p className="text-gray-300"> ...</p>
          )}
          <PaginationItem selectPage={onPageChange} pageNumber={lastPage} />
        </>
      )}
    </div>
  )
}
