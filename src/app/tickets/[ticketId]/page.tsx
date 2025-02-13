import Link from "next/link"
import { MOCK_TICKETS } from "@/db/MOCK_TICKETS"
import { TICKETS_ROUTE } from "@/routes"

type Props = {
  params: {
    ticketId: string
  }
}

export default function SingleTicketPage({ params }: Props) {
  const ticketToShow = MOCK_TICKETS.find(({ id }) => id === params.ticketId)

  if (!ticketToShow) {
    return (
      <section>
        <h2>The ticket #{params.ticketId} not found</h2>
        <Link href={TICKETS_ROUTE()} className="underline">
          Go back to tickets page
        </Link>
      </section>
    )
  }

  return (
    <section>
      <h2>{ticketToShow.name}</h2>
      <p>{ticketToShow.content}</p>
    </section>
  )
}
