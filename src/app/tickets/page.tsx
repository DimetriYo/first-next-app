import { ListChecks } from "lucide-react"
import { TicketCard } from "@/features/tickets/components/TicketCard"
import { MOCK_TICKETS } from "../../../db/MOCK_TICKETS"

export default function Tickets() {
  return (
    <section>
      <h2 className="flex gap-4 items-center text-3xl mb-6">
        <ListChecks className="w-6" />
        Tickets page
      </h2>
      <ul className="flex flex-wrap gap-4 animate-fade-in-from-top">
        {MOCK_TICKETS.map((card) => (
          <li key={card.id}>
            <TicketCard {...card} />
          </li>
        ))}
      </ul>
    </section>
  )
}
