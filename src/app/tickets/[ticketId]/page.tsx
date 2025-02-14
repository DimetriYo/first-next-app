import { FallbackScreen } from "@/components/FallbackScreen"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { TICKETS_ROUTE } from "@/routes"
import { MOCK_TICKETS } from "../../../../db/MOCK_TICKETS"

type Props = {
  params: {
    ticketId: string
  }
}

export default async function SingleTicketPage({ params }: Props) {
  const { ticketId } = await params
  const ticketToShow = MOCK_TICKETS.find(({ id }) => id === ticketId)

  if (!ticketToShow) {
    return (
      <FallbackScreen
        goToAddress={TICKETS_ROUTE()}
        goToDescription="Go back to tickets page"
      >
        The ticket #${params.ticketId} not found
      </FallbackScreen>
    )
  }

  return (
    <section className="animate-fade-in-from-top">
      <Card className="p-4">
        <CardTitle>{ticketToShow.name}</CardTitle>
        <CardContent>{ticketToShow.content}</CardContent>
      </Card>
    </section>
  )
}
