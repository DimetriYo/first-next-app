import { Ticket } from "@prisma/client"
import { Archive, ArchiveRestore, ArchiveX } from "lucide-react"
import { ReactElement } from "react"

export const STATUS_ICONS_MAP: Record<Ticket["status"], ReactElement> = {
  IN_PROGRESS: <ArchiveRestore />,
  CLOSED: <ArchiveX />,
  OPEN: <Archive />,
} as const
