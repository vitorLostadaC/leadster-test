export interface VideoSchema {
  id: string
  title: string
  url: string
  createdAt: string
  description: string
  thumbnail: string
  category: string
  donwloads: {
    xls?: string
    doc?: string
    ppt?: string
    zip?: string
  }
}

export interface modalVideoParamsSchema {
  open: boolean
  currentVideoId: null | string
}
