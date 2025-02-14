import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import type { TicketCard as TCard } from "@/features/tickets/types"
import { TICKET_BY_ID_ROUTE } from "@/routes"
import { STATUS_ICONS_MAP } from "../constants"

export function TicketCard({ content, id, name, status }: TCard) {
  return (
    <Card className="p-4 max-w-96">
      <CardTitle className="flex gap-4 items-center">
        {STATUS_ICONS_MAP[status]} Title: {name}
      </CardTitle>
      <CardContent>Content: {content}</CardContent>
      <Link
        href={TICKET_BY_ID_ROUTE(id)}
        className={buttonVariants({ variant: "secondary" })}
      >
        View
      </Link>
    </Card>
  )
}
