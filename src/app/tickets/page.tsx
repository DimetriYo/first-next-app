import Link from "next/link"
import { MOCK_TICKETS } from "@/db/MOCK_TICKETS"
import { TICKET_BY_ID_ROUTE } from "@/routes"

export default function Tickets() {
  return (
    <section>
      <h2 className="text-3xl mb-6">Tickets page</h2>
      <ul className="flex flex-col gap-4">
        {MOCK_TICKETS.map(({ content, id, name }) => (
          <li key={id}>
            <h3>Title: {name}</h3>
            <p>Content: {content}</p>
            <Link href={TICKET_BY_ID_ROUTE(id)} className="underline">
              View
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
