import BookingCart from "@/components/BookingCart"
import { getServerSession } from "next-auth"
import { authOption } from "../api/auth/[...nextauth]/AuthOption"
import getBookings from "@/libs/getBookings"
import getUserProfile from "@/libs/getUserProfile"


export default async function CartPage() {

    const session = await getServerSession(authOption)

    if(!session || !session?.user.token) return(
        <main>
            <p className="text-center font-bold text-2xl p-8">Here your Cart</p>
            <div className="text-xl text-center">please sign in to see your cart</div>
        </main>
    )

    const bookings = await getBookings(session?.user.token)
    const profile = await getUserProfile(session?.user.token)

    return(
        <main>
            <BookingCart bookings={bookings} userRole={profile.data.role} userToken={session.user.token}/>
        </main>
    )
}