import leaderlogo from "@/assets/logo.png"
import Image from "next/image"

export const Header = async () => {
  return (
    <header className="flex h-16 items-center justify-center bg-white">
      <Image src={leaderlogo} alt="Leader logo" className="max-h-8 w-auto" />
    </header>
  )
}
