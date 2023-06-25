import { VideoSchema } from "@/app/schemas/video.schema"
import videosJSON from "./data/videos.json"
import { CardVideo } from "./components/CardVideo/CardVideo"

export const VideosSection = () => {
  const videos: VideoSchema[] = videosJSON.slice(0, 9)

  return (
    <section className="mx-auto max-w-5xl">
      <div className="grid max-w-5xl grid-cols-3 gap-5">
        {videos.map(({ id, thumbnail, title }) => (
          <CardVideo key={id} title={title} thumbnail={thumbnail} />
        ))}
      </div>
    </section>
  )
}
