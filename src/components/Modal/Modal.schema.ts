import { HTMLProps, ReactNode } from "react"

export interface ModalPropsSchema {
  onClose: () => void
  open: boolean
  children?: ReactNode
  contentClassName?: HTMLProps<HTMLElement>["className"]
}
