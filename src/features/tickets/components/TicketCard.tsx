import { Ticket } from "@prisma/client"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { EDIT_TICKET_BY_ID_ROUTE, TICKET_BY_ID_ROUTE } from "@/routes"
import { STATUS_ICONS_MAP } from "../constants"

export function TicketCard({ content, id, name, status }: Ticket) {
  return (
    <Card className="max-w-96">
      <CardTitle className="flex gap-4 items-center">
        {STATUS_ICONS_MAP[status]} Title: {name}
      </CardTitle>
      <CardContent>Content: {content}</CardContent>
      <div className="flex gap-4">
        <Link
          href={TICKET_BY_ID_ROUTE(id)}
          className={buttonVariants({ variant: "secondary" })}
        >
          View
        </Link>
        <Link
          className={buttonVariants({ variant: "secondary" })}
          href={EDIT_TICKET_BY_ID_ROUTE(id)}
        >
          Update
        </Link>
      </div>
    </Card>
  )
}
