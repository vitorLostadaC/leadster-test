import { Button, LightMode } from "@chakra-ui/react"

interface Props {
  number: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}

export function PaginationItem({
  isCurrent = false,
  number,
  onPageChange
}: Props) {
  if (isCurrent)
    return (
      <LightMode>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="pink"
          disabled
          _disabled={{ colorbgColor: "pink.500", cursor: "default" }}
        >
          {number}
        </Button>
      </LightMode>
    )

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{ bg: "pink.500" }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  )
}
