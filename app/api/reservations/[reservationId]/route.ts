import { NextResponse } from 'next/server'

import getCurrentUser from '@/app/actions/getCurrentUser'
import prisma from '@/app/libs/prismadb'

export async function DELETE(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser()

  if (!currentUser) return NextResponse.error()

  const { reservationId } = params

  if (!reservationId || typeof reservationId !== 'string') throw new Error('Invalid ID')

  const reservation = await prisma.reservation.deleteMany({
    where: {
      id: reservationId,
      OR: [
        // ONLY THE OWNER OF THE RESERVATION OR THE PROPERTY SHOULD BE ABLE TO CANCEL THE RESERVATION 
        { userId: currentUser.id },
        { listing: { userId: currentUser.id } }
      ]
    }
  })

  return NextResponse.json(reservation)
}   