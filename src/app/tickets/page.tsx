import { ListChecks } from "lucide-react"
import { Suspense } from "react"
import { Spinner } from "@/components/ui/Spinner"
import { TicketsList } from "@/features/tickets/components/TicketsList"

export default function Tickets() {
  return (
    <section>
      <h2 className="flex gap-4 items-center text-3xl mb-6">
        <ListChecks className="w-6" />
        Tickets page
      </h2>
      <Suspense fallback={<Spinner />}>
        <TicketsList />
      </Suspense>
    </section>
  )
}
