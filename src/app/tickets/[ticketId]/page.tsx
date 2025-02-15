import Link from "next/link"
import { Placeholder } from "@/components/Placeholder"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { getCardById } from "@/features/tickets/api"
import { TICKETS_ROUTE } from "@/routes"

type Props = {
  params: Promise<{
    ticketId: string
  }>
}

export default async function SingleTicketPage({ params }: Props) {
  const { ticketId } = await params
  const ticket = await getCardById(ticketId)

  if (!ticket) {
    return (
      <Placeholder
        label={`The ticket #${ticketId} not found`}
        button={<Link href={TICKETS_ROUTE()}>Go back to tickets page</Link>}
      />
    )
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
