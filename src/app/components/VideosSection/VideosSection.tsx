"use client"

import { VideoSchema, modalVideoParamsSchema } from "@/schemas/Video.schema"
import videosJSON from "./data/videos.json"
import { CardVideo } from "./components/CardVideo/CardVideo"
import { Pagination } from "@/components/Pagination/Pagination"
import { useState } from "react"
import { CategorySchema } from "@/schemas/Category.schema"
import { OrderValues, VideoParamsSchema } from "./VideosSection.schema"
import { Chip } from "./components/Chip/Chip"
import { VideoModal } from "./components/VideoModal/VideoModal"

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
  const [videoParams, setVideoParams] = useState<VideoParamsSchema>({
    currentPage: 1,
    currentCategory: categoryOptionsFilter[0].id,
    currentOrder: OrderValues.Date
  })
  const [modalVideoParams, setModalVideoParams] =
    useState<modalVideoParamsSchema>({
      open: true,
      currentVideoId: null
    })

  const handleOpenModal = (videoId: string) => {
    setModalVideoParams({
      currentVideoId: videoId,
      open: true
    })
  }

  const handleCloseModal = () => {
    setModalVideoParams({
      currentVideoId: null,
      open: false
    })
  }

  const handleOrder = (a: VideoSchema, b: VideoSchema): number => {
    switch (videoParams.currentOrder) {
      case OrderValues.Date:
        const dateA = new Date(a.createdAt)
        const dateB = new Date(b.createdAt)

        if (dateA < dateB) {
          return -1
        } else if (dateA > dateB) {
          return 1
        } else {
          return 0
        }
      case OrderValues.Alphabetical:
        return a.title.localeCompare(b.title)
    }
  }

  const videosFiltred: VideoSchema[] = videosJSON.filter(
    (video) => video.category === videoParams.currentCategory
  )

  const videosSorted: VideoSchema[] = videosFiltred.sort(handleOrder)

  /**
   * first page
   * 9 * 1 - 9 = 0
   * second page
   * 9 * 2 - 9 = 9
   */
  const initialGetItems =
    QUANTITY_ITEMS_PER_PAGE * videoParams.currentPage - QUANTITY_ITEMS_PER_PAGE
  const endGetItems = QUANTITY_ITEMS_PER_PAGE * videoParams.currentPage

  const videos = videosSorted.slice(initialGetItems, endGetItems)

  return (
    <>
      {modalVideoParams.currentVideoId && (
        <VideoModal
          open={modalVideoParams.open}
          onClose={handleCloseModal}
          videoId={modalVideoParams.currentVideoId}
        />
      )}

      <section className="mx-auto flex max-w-5xl flex-col gap-6 py-20">
        <div className="flex justify-between">
          {/* Chip */}
          <div className="flex gap-3">
            {categoryOptionsFilter.map(({ id, name }) => (
              <Chip
                key={id}
                id={id}
                name={name}
                onClick={(categoryId) =>
                  setVideoParams({
                    ...videoParams,
                    currentPage: 1,
                    currentCategory: categoryId
                  })
                }
                selected={videoParams.currentCategory === id}
              />
            ))}
          </div>
          {/* Order */}
          <div>
            <label className="mr-3 font-bold" htmlFor="order">
              Ordenar por
            </label>
            <select
              id="order"
              className="rounded-lg border-[1px] border-solid border-gray-700 bg-transparent px-2 py-1 outline-none"
              value={videoParams.currentOrder}
              onChange={(e) =>
                setVideoParams({
                  ...videoParams,
                  currentOrder: e.target.value as OrderValues
                })
              }
            >
              <option value={OrderValues.Date}>Data de Publicação</option>
              <option value={OrderValues.Alphabetical}>Ordem Alfabética</option>
            </select>
          </div>
        </div>

        <hr className="h-[2px] border-none bg-gray-200" />
        {/* Cards */}
        <div className="grid min-h-[850px] max-w-5xl grid-cols-3 grid-rows-3 gap-5">
          {videos.map((video) => (
            <CardVideo
              key={video.id}
              video={video}
              OnClick={(video) => handleOpenModal(video.id)}
            />
          ))}
        </div>

        <hr className="h-[2px] border-none bg-gray-200" />
        {/* Pagination */}
        <div className="flex justify-center">
          <Pagination
            onPageChange={(page) =>
              setVideoParams({ ...videoParams, currentPage: page })
            }
            totalItems={videosSorted.length}
            currentPage={videoParams.currentPage}
            quantityItemsPerPage={QUANTITY_ITEMS_PER_PAGE}
          />
        </div>
      </section>
    </>
  )
}
