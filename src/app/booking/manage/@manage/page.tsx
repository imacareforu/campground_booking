import { authOption } from "@/app/api/auth/[...nextauth]/AuthOption"
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import UserDatail from "@/components/UserDetail"
import CampgroundForm from "@/components/CampgroundForm"

export default async function ManagePage() {

    const session = await getServerSession(authOption)

    if (!session || !session.user.token) return (
        <UserDatail/>
    )

    const profile = await getUserProfile(session.user.token)

    if (profile.data.role != 'admin') return (
        <main className='bg-red-100 mx-2 rounded'>
            <div>try sign in with admin@campground.com to access </div>
        </main>
    )

    return(
        <CampgroundForm userToken={session.user.token}/>
    )
}