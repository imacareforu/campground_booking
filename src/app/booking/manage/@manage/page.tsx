import { authOption } from "@/app/api/auth/[...nextauth]/AuthOption"
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import CampgroundForm from "@/components/CampgroundForm"
import UserDetail from "@/components/UserDetail"

export default async function ManagePage() {

    const session = await getServerSession(authOption)

    if (!session || !session.user.token) return (
        <UserDetail/>
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