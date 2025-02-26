import { notFound } from "next/navigation"
import { getTicketById } from "@/features/tickets/api"
import { SingleTicketCard } from "@/features/tickets/components/SIngleTicketCard"

type Props = {
  params: Promise<{
    ticketId: string
  }>
}

export default async function SingleTicketPage({ params }: Props) {
  const { ticketId } = await params
  const ticket = await getTicketById(ticketId)

  if (!ticket) {
    notFound()
  }

  return (
    <section className="animate-fade-in-from-top">
      <SingleTicketCard
        content={ticket.content}
        name={ticket.name}
        id={ticket.id}
      />
    </section>
  )
}
