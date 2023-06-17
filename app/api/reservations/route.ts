import { NextResponse } from 'next/server'

import getCurrentUser from '@/app/actions/getCurrentUser'
import prisma from '@/app/libs/prismadb'

export async function POST(request: Request) {
    const currentUser = await getCurrentUser()

    if(!currentUser) return NextResponse.error()

    const body = await request.json()

    const { listingId, startDate, endDate, price } = body

    if(!listingId || !startDate || !endDate || !price) return NextResponse.error()

    const listingAndReservation = await prisma.listing.update({
        where: {
            id: listingId
        },
        data: {
            reservations: {
                create: {
                    userId: currentUser.id,
                    startDate,
                    endDate,
                    totalPrice
                }
            }
        }
    })

    return NextResponse.json(listingAndReservation)
}