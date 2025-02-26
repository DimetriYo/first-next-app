"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { deleteTicket } from "../actions/deleteTicket"

export function SingleTicketCard({
  name,
  content,
  id,
}: {
  name: string
  content: string
  id: string
}) {
  const handleDeleteTicket = async () => {
    await deleteTicket(id)
  }

  return (
    <Card className="p-4">
      <CardTitle>{name}</CardTitle>
      <CardContent>{content}</CardContent>
      <Button onClick={handleDeleteTicket}>Delete</Button>
    </Card>
  )
}
