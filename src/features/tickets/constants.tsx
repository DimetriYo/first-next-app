import { Archive, ArchiveRestore, ArchiveX } from "lucide-react"
import { ReactElement } from "react"
import { CardStatus } from "./types"

export const STATUS_ICONS_MAP: Record<CardStatus, ReactElement> = {
  "in-progress": <ArchiveRestore />,
  closed: <ArchiveX />,
  open: <Archive />,
} as const
