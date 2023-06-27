import { useCallback, useEffect } from "react"
import { X } from "lucide-react"
import { ModalPropsSchema } from "./Modal.schema"

export const Modal = ({
  onClose,
  open,
  children,
  className
}: ModalPropsSchema) => {
  useEffect(() => {
    if (open === true) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  const closeOnEscapeKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    },
    [onClose]
  )
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown)
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown)
    }
  }, [closeOnEscapeKeyDown])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center bg-blue-950/50 `}
      onClick={onClose}
    >
      <div
        className={`h-full w-full border-t-4 border-solid border-t-primary-400 bg-white sm:h-max sm:w-max sm:rounded-xl  ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="ml-auto mr-2 h-6 w-max cursor-pointer rounded-full p-1 transition-colors hover:bg-gray-100"
          onClick={onClose}
        >
          <X className="text-gray-500" size={20} />
        </div>

        {children}
      </div>
    </div>
  )
}
