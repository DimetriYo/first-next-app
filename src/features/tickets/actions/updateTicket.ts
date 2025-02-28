"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { TICKETS_ROUTE } from "@/routes"

export const updateTicket = async (id: string, data: FormData) => {
  await prisma.ticket.update({
    where: { id },
    data: {
      content: data.get("content") as string,
      name: data.get("title") as string,
    },
  })

  revalidatePath(TICKETS_ROUTE())
  redirect(TICKETS_ROUTE())
}
