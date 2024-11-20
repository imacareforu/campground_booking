import BookingSubMenu from "@/components/BookingSubMenu";
import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/AuthOption";
import getUserProfile from "@/libs/getUserProfile";

export default  async function ReservationLayout({children} : {children:React.ReactNode}) {
    
    const session = await getServerSession(authOption)

    if (!session || !session.user.token) return (
         <>{children}</>
    )

    const profile = await getUserProfile(session.user.token)

    if (profile.data.role != 'admin') return (
         <>{children}</>
    )
    
    return(
        <div className='flex flex-row p-5'>
            <BookingSubMenu/>
            {children}
        </div>
    );
}