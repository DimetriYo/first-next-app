import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
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
      <form action={deleteTicket.bind(null, id)}>
        <Button>Delete</Button>
      </form>
    </Card>
  )
}
