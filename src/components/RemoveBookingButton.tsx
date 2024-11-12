"use client"
import deleteBooking from "@/libs/deleteBooking"
import { useSession } from "next-auth/react"

export default function RemoveBookingButton({bid}:{bid:string}) {
    const session = useSession()
    const token = session.data?.user.token
    function remove(bid:string): any{
        deleteBooking(token, bid)
    }
    
    return (
        <button onClick={()=>{remove(bid)}} >remove</button>
    )
}