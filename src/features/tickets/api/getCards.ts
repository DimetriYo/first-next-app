import { MOCK_TICKETS } from "../../../../db/MOCK_TICKETS"

export const getCards = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("true")
    }, 2000)
  )

  return Promise.resolve(MOCK_TICKETS)
}
