import { MOCK_TICKETS } from "../../../../db/MOCK_TICKETS"

export const getCards = () => {
  return Promise.resolve(MOCK_TICKETS)
}
