import deleteBooking from "@/libs/deleteBooking"
import { useRouter } from "next/navigation"

export default function RemoveBookingButton({bid,userToken}:{bid:string,userToken:string}) {
    const router = useRouter()

    async function remove(bid:string){
        await deleteBooking(userToken, bid)
        router.refresh()
    }
 
    return (
        <button className='bg-sky-200 border-sky-400 border-2 px-2 rounded-lg' onClick={()=>{remove(bid)}}>remove</button>
    )
}