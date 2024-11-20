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
        const today = new Date()
        if(!bookingDate || !checkoutDate) alert('please select new date')
        else if (bd < today) alert("check-in date is invalid \n(check-in before today)")
        else if (cd < today || cd<bd) alert("check-out date is invalid \n(check-out before today or check-out before check-in")
        else if (checkoutDate.diff(bookingDate, "day")<1 || checkoutDate.diff(bookingDate, "day")>3) alert("can book only from 1 up to 3 nights")
        else {
            await editBooking(userToken,bid,bd,cd).then(()=>setEditing(false))
            router.refresh()
            alert("update success")
        }
    }

    return (
        <div className="inline mx-4">
            {editing? null:<button className='bg-neutral-700 border-2 px-2 rounded-full text-white hover:text-amber-500 p-1 focus:shadow-md focus:shadow-white-500' 
            onClick={() => { setEditing(!editing) }}>edit</button>}
            {editing? <button className='bg-red-600 text-white border-2 px-2 rounded-full p-1 hover:text-amber-500' onClick={() => { setEditing(!editing) }}>cancal</button>:null}
            {editing? <button className='bg-red-600 text-white border-2 px-2 ml-4 rounded-full p-1 hover:text-amber-500' onClick={updateBooking}>update</button>:null}
            {
                editing?
                    <div className="bg-white border-2 border-gray-400 w-fit rounded-lg mt-2">
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