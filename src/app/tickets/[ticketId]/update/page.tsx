import { notFound } from "next/navigation"
import { updateTicket } from "@/features/tickets/actions/updateTicket"
import { getTicketById } from "@/features/tickets/api"
import { EditTicketForm } from "@/features/tickets/components/EditTicketForm"

type Props = {
  params: Awaited<{ ticketId: string }>
}

export default async function UpdateTicket({ params }: Props) {
  const { ticketId } = await params

  const ticket = await getTicketById(ticketId)

  if (!ticket) {
    return notFound()
  }

  return (
    <section>
      <h2>Edit ticket</h2>
      <EditTicketForm
        action={updateTicket.bind(null, ticketId)}
        content={ticket.content}
        name={ticket.name}
      />
    </section>
  )
}
