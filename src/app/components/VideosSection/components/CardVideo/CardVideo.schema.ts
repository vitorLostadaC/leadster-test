import { VideoSchema } from "@/schemas/Video.schema"

export interface CardVideoPropsSchema {
  video: VideoSchema
  OnClick?: (video: VideoSchema) => void
}
