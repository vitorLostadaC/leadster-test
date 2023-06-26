export interface VideoSchema {
  id: string
  title: string
  url: string
  createdAt: string
  description: string
  thumbnail: string
  category: string
  donwloads: {
    xls?: DownloadSchema
    doc?: DownloadSchema
    ppt?: DownloadSchema
    zip?: DownloadSchema
  }
}

export interface modalVideoParamsSchema {
  open: boolean
  currentVideoId: null | string
}

export interface DownloadSchema {
  url: string
  name: string
  color: string
}
