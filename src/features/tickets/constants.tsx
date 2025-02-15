import { Archive, ArchiveRestore, ArchiveX } from "lucide-react"
import { ReactElement } from "react"
import { TicketStatus } from "./types"

export const STATUS_ICONS_MAP: Record<TicketStatus, ReactElement> = {
  "in-progress": <ArchiveRestore />,
  closed: <ArchiveX />,
  open: <Archive />,
} as const
