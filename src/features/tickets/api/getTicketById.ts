import { prisma } from "@/lib/prisma"

export const getTicketById = async (id: string) => {
  return prisma.ticket.findUnique({ where: { id } })
}
