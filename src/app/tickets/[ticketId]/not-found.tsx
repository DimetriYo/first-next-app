import Link from "next/link"
import { Placeholder } from "@/components/Placeholder"
import { TICKETS_ROUTE } from "@/routes"

export default function PageNotFound() {
  return (
    <Placeholder
      label="Ticket not found"
      button={<Link href={TICKETS_ROUTE()}>Go to tickets</Link>}
    />
  )
}
