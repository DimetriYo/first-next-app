export type TicketStatus = "OPEN" | "CLOSED" | "IN_PROGRESS"

export type TTicket = {
  id: string
  name: string
  content: string
  status: TicketStatus
}
