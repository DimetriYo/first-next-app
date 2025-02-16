import { notFound } from "next/navigation"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { getCardById } from "@/features/tickets/api"

type Props = {
  params: Promise<{
    ticketId: string
  }>
}

export default async function SingleTicketPage({ params }: Props) {
  const { ticketId } = await params
  const ticket = await getCardById(ticketId)

  if (!ticket) {
    notFound()
  }

  return (
    <section className="animate-fade-in-from-top">
      <Card className="p-4">
        <CardTitle>{ticket.name}</CardTitle>
        <CardContent>{ticket.content}</CardContent>
      </Card>
    </section>
  )
}
