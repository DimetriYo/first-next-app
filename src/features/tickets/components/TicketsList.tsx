import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { getTickets } from "../api"
import { CreateTicketForm } from "./CreateTicketForm"
import { TicketCard } from "./TicketCard"

export async function TicketsList() {
  const tickets = await getTickets()

  return (
    <>
      <Card className="max-w-2xl mb-6 p-0">
        <CardHeader>+ New ticket</CardHeader>
        <CardContent>
          <CreateTicketForm />
        </CardContent>
      </Card>

      <ul className="flex flex-wrap gap-4 animate-fade-in-from-top">
        {tickets.map((card) => (
          <li key={card.id}>
            <TicketCard {...card} />
          </li>
        ))}
      </ul>
    </>
  )
}
