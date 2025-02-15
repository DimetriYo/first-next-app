import { MOCK_TICKETS } from "../../../../db/MOCK_TICKETS"

export const getCardById = async (ticketId: string) => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("true")
    }, 2000)
  )
  const ticketToShow = MOCK_TICKETS.find(({ id }) => id === ticketId)

  return Promise.resolve(ticketToShow)
}
