"use client"

import { VideoSchema } from "@/schemas/video.schema"
import videosJSON from "./data/videos.json"
import { CardVideo } from "./components/CardVideo/CardVideo"
import { Pagination } from "@/components/Pagination/Pagination"
import { useState } from "react"
import { CategorySchema } from "@/schemas/Category.schema"

const QUANTITY_ITEMS_PER_PAGE = 9
const categoryOptionsFilter: CategorySchema[] = [
  {
    name: "Agências",
    id: "agency"
  },
  {
    name: "Chatbot",
    id: "chatbot"
  },
  {
    name: "Marketing digital",
    id: "digital_marketing"
  },
  {
    name: "Geração de Leads",
    id: "lead_generation"
  },
  {
    name: "Midia Paga",
    id: "paid_media"
  }
]

export const VideosSection = () => {
  const [videoParams, setVideoParams] = useState({
    currentPage: 1,
    currentCategory: categoryOptionsFilter[0].id
  })

  const videosFiltred: VideoSchema[] = videosJSON.filter(
    (video) => video.category === videoParams.currentCategory
  )

  /**
   * first page
   * 9 * 1 - 9 = 0
   * second page
   * 9 * 2 - 9 = 9
   */
  const initialGetItems =
    QUANTITY_ITEMS_PER_PAGE * videoParams.currentPage - QUANTITY_ITEMS_PER_PAGE
  const endGetItems = QUANTITY_ITEMS_PER_PAGE * videoParams.currentPage

  const videos = videosFiltred.slice(initialGetItems, endGetItems)

  console.log(videosFiltred.length)

  return (
    <section className="mx-auto max-w-5xl">
      <div className="flex">
        {categoryOptionsFilter.map(({ id, name }) => (
          <Chip
            key={id}
            id={id}
            name={name}
            onClick={(categoryId) =>
              setVideoParams({ currentPage: 1, currentCategory: categoryId })
            }
            selected={videoParams.currentCategory === id}
          />
        ))}
      </div>

      <div className="grid min-h-[850px] max-w-5xl grid-cols-3 gap-5">
        {videos.map(({ id, thumbnail, title }) => (
          <CardVideo key={id} title={title} thumbnail={thumbnail} />
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination
          onPageChange={(page) =>
            setVideoParams({ ...videoParams, currentPage: page })
          }
          totalItems={videosFiltred.length}
          currentPage={videoParams.currentPage}
          quantityItemsPerPage={QUANTITY_ITEMS_PER_PAGE}
        />
      </div>
    </section>
  )
}

export interface ChipPropsSchema {
  name: string
  id: string
  onClick: (categoryId: string) => void
  selected: boolean
}

export const Chip = ({ name, selected, onClick, id }: ChipPropsSchema) => {
  return (
    <button
      className={`rounded-full border-[1px] border-solid px-3 py-[2px]  ${
        selected
          ? "bg-primary-400 text-white"
          : "hover:border-primary-400z border-gray-700 hover:text-primary-400"
      }`}
      onClick={() => onClick(id)}
    >
      {name}
    </button>
  )
}
