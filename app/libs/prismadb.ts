import { PrismaClient } from "@prisma/client"

// NEXTJS HOT MODULE RELOAD CAN CAUSE MANY PROSMA CLIENTS TO BE CREATED HENCE WE WRITE THIS CODE TO AVOID THIS
declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client