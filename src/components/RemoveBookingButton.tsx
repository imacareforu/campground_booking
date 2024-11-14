"use client"
import deleteBooking from "@/libs/deleteBooking"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { revalidatePath, revalidateTag } from "next/cache"
import { useRouter } from "next/navigation"

export default function RemoveBookingButton({bid}:{bid:string}) {
    const session = useSession()
    const token = session.data?.user.token
    const router = useRouter()
    async function remove(bid:string){
        await deleteBooking(token, bid)
        router.refresh()
    }
 


    
    return (
        <button onClick={()=>{remove(bid);}} >remove</button>
    )
}