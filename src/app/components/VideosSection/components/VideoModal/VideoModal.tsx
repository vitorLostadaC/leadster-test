import { Modal } from "@/components/Modal/Modal"
import { ModalPropsSchema } from "@/components/Modal/Modal.schema"
import videosJSON from "../../data/videos.json"
import { DownloadSchema } from "@/schemas/Video.schema"
import { Tag } from "@/components/Tag/Tag"
import { DownloadCloud } from "lucide-react"

interface VideoModalContentPropsSchema
  extends Pick<ModalPropsSchema, "open" | "onClose"> {
  videoId: null | string
}

export const VideoModal = ({
  open,
  onClose,
  videoId
}: VideoModalContentPropsSchema) => {
  const currentVideo = videosJSON.find((video) => video.id === videoId)
  const tags: DownloadSchema[] = Object.values(currentVideo?.donwloads ?? {})

  return (
    <Modal open={open} onClose={onClose} className="sm:max-w-md">
      <h3 className="mx-auto mb-6 max-w-[250px] text-justify text-base font-bold leading-4">
        <span className="text-primary-400">Webinar: </span>{" "}
        {currentVideo?.title}
      </h3>
      <iframe
        className="h-80 w-full bg-black"
        src={currentVideo?.url}
        title={currentVideo?.title}
      ></iframe>

      <div className="flex h-1/2 flex-col justify-between p-5 text-sm  sm:justify-start">
        <div className="flex flex-col gap-2">
          <h6 className="font-bold">Descrição</h6>
          <hr />
          <p className="h-36 overflow-auto sm:h-28 ">
            {currentVideo?.description}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="mt-auto font-bold">Downloads</h6>
          <hr />
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag
                key={tag.name}
                Icon={DownloadCloud}
                name={tag.name}
                color={tag.color}
                href={tag.url}
              />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  )
}
