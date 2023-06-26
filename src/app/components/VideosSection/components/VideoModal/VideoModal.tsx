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
    <Modal open={open} onClose={onClose}>
      <h3 className="font-bold">
        <p className="text-primary-400">Webinar: </p> {currentVideo?.title}
      </h3>
      <iframe
        className="h-80 w-full"
        src={currentVideo?.url + "?controls=0"}
        title={currentVideo?.title}
      ></iframe>

      <div>
        <h6>Descrição</h6>
        <hr />
        <p>{currentVideo?.description}</p>
        <h6>Downloads</h6>
        <hr />
        tags...
      </div>
    </Modal>
  )
}
// ;<iframe
//   width="560"
//   height="315"
//   src="https://www.youtube.com/embed/0hvoYuFulb0"
//   frameborder="0"
//   allowfullscreen
// ></iframe>
