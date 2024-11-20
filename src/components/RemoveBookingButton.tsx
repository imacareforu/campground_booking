import deleteBooking from "@/libs/deleteBooking"
import { useRouter } from "next/navigation"

export default function RemoveBookingButton({bid,userToken}:{bid:string,userToken:string}) {
    const router = useRouter()

    async function remove(bid:string){
        await deleteBooking(userToken, bid)
        alert('remove success')
        router.refresh()
    }
 
    return (
        <button className='p-1 bg-neutral-700 text-white hover:text-amber-500 border-2 px-2 rounded-full focus:shadow-md focus:shadow-white-500' 
        onClick={()=>{remove(bid)}}>remove</button>
    )
}