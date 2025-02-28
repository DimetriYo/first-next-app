import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createTicket } from "../actions/createTicket"

export function CreateTicketForm() {
  return (
    <form action={createTicket} className="flex flex-col gap-4">
      <Label className="flex flex-col gap-3">
        Title
        <Input name="title" type="text" placeholder="Title" />
      </Label>
      <Label className="flex flex-col gap-3">
        Content
        <Textarea name="content" />
      </Label>
      <Button className="self-start" type="submit">
        Create
      </Button>
    </form>
  )
}
