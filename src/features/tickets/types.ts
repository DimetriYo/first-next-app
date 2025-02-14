export type CardStatus = "open" | "closed" | "in-progress"

export type TicketCard = {
  id: string
  name: string
  content: string
  status: CardStatus
}
