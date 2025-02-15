export type TicketStatus = "open" | "closed" | "in-progress"

export type TTicket = {
  id: string
  name: string
  content: string
  status: TicketStatus
}
