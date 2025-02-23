import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const tickets = [
  {
    name: "Ticket name 1",
    content: "Ticket content 1. From Database",
    status: "CLOSED" as const,
  },
  {
    name: "Ticket name 2",
    content: "Ticket content 2. From Database",
    status: "OPEN" as const,
  },
  {
    name: "Ticket name 3",
    content: "Ticket content 3. From Database",
    status: "OPEN" as const,
  },
  {
    name: "Ticket name 4",
    content: "Ticket content 4. From Database",
    status: "IN_PROGRESS" as const,
  },
]

async function seed() {
  await prisma.ticket.deleteMany()

  await prisma.ticket.createMany({ data: tickets })
}

seed()
