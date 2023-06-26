export const enum OrderValues {
  Date = "date",
  Alphabetical = "alphabetical"
}

export interface VideoParamsSchema {
  currentPage: number
  currentCategory: string
  currentOrder: OrderValues
}
