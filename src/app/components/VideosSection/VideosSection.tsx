"use client"

import { VideoSchema } from "@/app/schemas/video.schema"
import videosJSON from "./data/videos.json"
import { CardVideo } from "./components/CardVideo/CardVideo"
import { Pagination } from "@/components/Pagination/Pagination"
import { useState } from "react"

const QUANTITY_ITEMS_PER_PAGE = 9

export const VideosSection = () => {
  const [currentPage, setCurrentPage] = useState(1)

  /**
   * first page
   * 9 * 1 - 9 = 0
   * second page
   * 9 * 2 - 9 = 9
   */
  const initialGetItems =
    QUANTITY_ITEMS_PER_PAGE * currentPage - QUANTITY_ITEMS_PER_PAGE
  const endGetItems = QUANTITY_ITEMS_PER_PAGE * currentPage

  const videos: VideoSchema[] = videosJSON.slice(initialGetItems, endGetItems)

  return (
    <section className="mx-auto max-w-5xl">
      <div className="flex"></div>

      <div className="grid max-w-5xl grid-cols-3 gap-5">
        {videos.map(({ id, thumbnail, title }) => (
          <CardVideo key={id} title={title} thumbnail={thumbnail} />
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination
          onPageChange={setCurrentPage}
          totalItems={videosJSON.length}
          currentPage={currentPage}
          quantityItemsPerPage={QUANTITY_ITEMS_PER_PAGE}
        />
      </div>
    </section>
  )
}

export interface ChipPropsSchema {
  name: string
  id: string
  onClick: () => {}
}

export const Chip = () => {}
