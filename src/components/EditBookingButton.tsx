import { useState } from "react"
import LocationDateReserve from "./LocationDateReserve"
import { Dayjs } from "dayjs"
import editBooking from "@/libs/editBooking"
import dayjs from "dayjs"
import { useRouter } from "next/navigation"

export default function EditBookingButton({bid,userToken}:{bid:string,userToken:string}) {

    const [editing, setEditing] = useState(false)
    const [bookingDate, setBookingDate] = useState<Dayjs | null>(null)
    const [checkoutDate, setCheckoutDate] = useState<Dayjs | null>(null)

    const router = useRouter()

    async function updateBooking() {
        const bd = dayjs(bookingDate, "YYYY-MM-DD").toDate()
        const cd = dayjs(checkoutDate, "YYYY-MM-DD").toDate()
        if(!bookingDate || !checkoutDate) alert('please select new date')
        else {
            await editBooking(userToken,bid,bd,cd).then(()=>setEditing(false))
            router.refresh()
        }
    }

    return (
        <div className="inline mx-4">
            {editing? null:<button className='bg-sky-200 border-sky-400 border-2 px-2 rounded-lg' onClick={() => { setEditing(!editing) }}>edit</button>}
            {editing? <button className='bg-orange-200 border-orange-400 border-2 px-2 rounded-lg' onClick={() => { setEditing(!editing) }}>cancal</button>:null}
            {editing? <button className='bg-orange-200 border-orange-400 border-2 px-2 ml-4 rounded-lg' onClick={updateBooking}>update</button>:null}
            {
                editing?
                    <div className="bg-orange-100 border-2 border-orange-300 w-fit rounded-lg mt-2">
                        <div className="px-5 pt-2 text-center">please select new date</div>
                        <div className="flex flex-row">
                            <LocationDateReserve label="Check-In Date" onDateChange={(value: Dayjs) => setBookingDate(value)}/>
                            <LocationDateReserve label="Check-Out Date" onDateChange={(value: Dayjs) => setCheckoutDate(value)}/>
                        </div>
                    </div> : null
            }
        </div>
    )
}