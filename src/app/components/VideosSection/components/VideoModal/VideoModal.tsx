import { Modal } from "@/components/Modal/Modal"
import { ModalPropsSchema } from "@/components/Modal/Modal.schema"
import videosJSON from "../../data/videos.json"

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

  console.log(currentVideo?.url)
  return (
    <Modal open={open} onClose={onClose} className="max-w-md">
      <h3 className="mx-auto mb-6 max-w-[250px] text-justify text-base font-bold leading-4">
        <span className="text-primary-400">Webinar: </span>{" "}
        {currentVideo?.title}
      </h3>
      <iframe
        className="h-80 w-full bg-black"
        src={currentVideo?.url}
        title={currentVideo?.title}
      ></iframe>

      <div className="flex flex-col gap-2 p-5 text-sm">
        <h6 className="font-bold">Descrição</h6>
        <hr />
        <p className="h-28 overflow-auto ">{currentVideo?.description}</p>
        <h6 className="font-bold">Downloads</h6>
        <hr />
      </div>
    </Modal>
  )
}
