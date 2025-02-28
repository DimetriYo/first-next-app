import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { EDIT_TICKET_BY_ID_ROUTE } from "@/routes"
import { deleteTicket } from "../actions/deleteTicket"

export function SingleTicketCard({
  name,
  content,
  id,
}: {
  name: string
  content: string
  id: string
}) {
  return (
    <Card>
      <CardTitle>{name}</CardTitle>
      <CardContent>{content}</CardContent>
      <div className="flex gap-4">
        <form action={deleteTicket.bind(null, id)}>
          <Button>Delete</Button>
        </form>
        <Link
          className={buttonVariants({ variant: "default" })}
          href={EDIT_TICKET_BY_ID_ROUTE(id)}
        >
          Edit
        </Link>
      </div>
    </Card>
  )
}
