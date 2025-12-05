"use client"

import { ColumnDef } from "@tanstack/react-table"
import { SquareChevronRight } from "lucide-react"
import { Checkbox } from "@/src/components/ui/checkbox"


export type Campaign = {
  id: string
  name: string
  client: string
  progress: number
  postsLive: number
  comments: number
  likes: number
  impressions: number
  views: number
  reach: number
}

export const campaignColumns: ColumnDef<Campaign>[] = [
  {
  id: "select",
  header: () => (
    <div className="pl-6">
      <Checkbox className="h-4 w-4" aria-label="Select all" />
    </div>
  ),
  cell: () => (
    <div className="pl-6">
      <Checkbox className="h-4 w-4" aria-label="Select row" />
    </div>
  ),
},
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <span className="font-medium text-[#2E1938]">
        {row.getValue("name")}
      </span>
    ),
  },
  {
    accessorKey: "client",
    header: "Client",
    cell: ({ row }) => (
      <span className="text-[#6C4F86]">
        {row.getValue("client")}
      </span>
    ),
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => {
      const progress = row.getValue("progress") as number
      return (
        <div className="flex items-center gap-3">
          <div className="relative h-1.5 w-32 overflow-hidden rounded-full bg-[#E1D2FF]">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-[#5F5BFF]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[11px] text-[#6C4F86]">
            {progress}%
          </span>
        </div>
      )
    },
  },
  { accessorKey: "postsLive", header: "PostsLive" },
  { accessorKey: "comments", header: "Comments" },
  { accessorKey: "likes", header: "Likes" },
  { accessorKey: "impressions", header: "Impressions" },
  { accessorKey: "views", header: "Views" },
  { accessorKey: "reach", header: "Reach" },

  {
    id: "view",
    header: "",
    cell: () => (
      <button className="inline-flex h-7 w-7 items-center justify-center">
        <SquareChevronRight className="h-5 w-5" />
      </button>
    ),
  },
]
