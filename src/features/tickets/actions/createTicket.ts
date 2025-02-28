"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/prisma"
import { TICKETS_ROUTE } from "@/routes"

export const createTicket = async (formData: FormData) => {
  const rawTicket = {
    name: formData.get("title") as string,
    content: formData.get("content") as string,
  }

  await prisma.ticket.create({
    data: rawTicket,
  })

  revalidatePath(TICKETS_ROUTE())
}
