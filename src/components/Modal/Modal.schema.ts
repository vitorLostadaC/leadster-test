import { HTMLProps, ReactNode } from "react"

export interface ModalPropsSchema {
  onClose: () => void
  open: boolean
  children?: ReactNode
  /**
   * className is applicated in div content
   */
  className?: HTMLProps<HTMLElement>["className"]
}
