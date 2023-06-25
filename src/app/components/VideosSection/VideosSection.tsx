import { VideoSchema } from "@/app/schemas/video.schema"
import videosJSON from "./data/videos.json"
import { CardVideo } from "./components/CardVideo/CardVideo"

export const VideosSection = () => {
  const videos: VideoSchema[] = videosJSON

  return (
    <section>
      <div>
        {videos.map(({ id, thumbnail, title }) => (
          <CardVideo key={id} title={title} thumbnail={thumbnail} />
        ))}
      </div>
    </section>
  )
}
