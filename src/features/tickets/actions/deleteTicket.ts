"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { TICKETS_ROUTE } from "@/routes"

export const deleteTicket = async (id: string) => {
  await prisma.ticket.delete({ where: { id } })
  revalidatePath(TICKETS_ROUTE())
  redirect(TICKETS_ROUTE())
}
