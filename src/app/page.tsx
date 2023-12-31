import { DemonstrationSection } from "./components/Demonstration/Demonstration"
import { SloganSection } from "./components/SloganSection/SloganSection"
import { VideosSection } from "./components/VideosSection/VideosSection"

export default function Home() {
  return (
    <main>
      <SloganSection />
      <VideosSection />
      <DemonstrationSection />
    </main>
  )
}
