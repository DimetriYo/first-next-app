import { Ticket } from "@prisma/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type Props = Pick<Ticket, "content" | "name"> & {
  action: (props: FormData) => void
}

export function EditTicketForm({ content, name, action }: Props) {
  return (
    <form action={action} className="flex flex-col gap-4">
      <Label className="flex flex-col gap-3">
        Title
        <Input
          name="title"
          type="text"
          placeholder="Title"
          defaultValue={name}
        />
      </Label>
      <Label className="flex flex-col gap-3">
        Content
        <Textarea name="content" defaultValue={content} />
      </Label>
      <Button className="self-start" type="submit">
        Update
      </Button>
    </form>
  )
}
