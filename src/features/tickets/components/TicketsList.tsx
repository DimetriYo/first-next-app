import { getCards } from "../api"
import { TicketCard } from "./TicketCard"

export async function TicketsList() {
  const tickets = await getCards()

  return (
    <ul className="flex flex-wrap gap-4 animate-fade-in-from-top">
      {tickets.map((card) => (
        <li key={card.id}>
          <TicketCard {...card} />
        </li>
      ))}
    </ul>
  )
}
