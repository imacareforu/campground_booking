"use client"
import { authOption } from "@/app/api/auth/[...nextauth]/AuthOption"
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import InputAndLabel from "@/components/InputAndLabel"
import InputFileUpload from "@/components/UploadButton"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import { dbConnect } from "@/db/dbConnect"
import Campground from "@/db/models/Campground"
import LacationDateReserve from "./LoactionDateReserve"
import dayjs, { Dayjs } from "dayjs"
import { useState } from "react"
import Booking from "@/db/models/Booking"
import makeBooking from "@/libs/makeBooking"
import { FormControl } from "@mui/material"
import { useSession } from "next-auth/react"

export default function BookingForm2() {

    const {data:session} = useSession()

    if (!session || !session.user.token) return (
        <main className='bg-red-100 mx-2 rounded'>
            <div>try sign in with info@primerental.com to see changes</div>
        </main>
    )

    const [bookingDate, setBookingDate] = useState<Dayjs | null>(null)
    const [checkoutDate, setCheckoutDate] = useState<Dayjs | null>(null)
    const user = session.user._id
    const campground = "6729eb3a596522ae35bc5c69"
    const token = session.user.token



    // const profile = await getUserProfile(session.user.token)

    // if (profile.data.role != 'admin') return (
    //     <main className='bg-red-100 mx-2 rounded'>
    //         <div>try sign in with info@primerental.com to access </div>
    //     </main>
    // )

    function booking() :any{
        const bd = dayjs(bookingDate, "YYYY-MM-DD").toDate()
        const cd = dayjs(checkoutDate, "YYYY-MM-DD").toDate()
        makeBooking(token,bd, cd, user, campground)
    }

    return (
        <FormControl className="space-y-5 w-80 border-sky-500 border-2 border-solid bg-blue-100 rounded-xl" sx={{m: 2,p:2}}>
            <LacationDateReserve label="Check-In Date" id="bookingDate" onDateChange={(value: Dayjs) => setBookingDate(value) }/>
            <LacationDateReserve label="Check-Out Date" id="checkoutDate" onDateChange={(value: Dayjs) => setCheckoutDate(value)} />
            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white p-2 mb-5 rounded" onClick={()=>booking()}>Book</button>
        </FormControl>
    )
}

// export default function RegisterForm(){
//     const [username,setUsername] = useState('')
//     const [tel,setTel] = useState('')
//     const [email,setEmail] = useState('')
//     const [password,setPassword] = useState('')

//     const router = useRouter()

//     function register() : any{
//         userRegister(username,tel,email,password)
//         router.replace('/')
//     }

//     return(
//         <FormControl className="space-y-5 w-80 border-sky-500 border-2 border-solid bg-blue-100 rounded-xl" sx={{m: 2,p:2}}>
//             <TextField id="username" label="Username" variant="standard" value={username} onChange={(e)=>setUsername(e.target.value)}/>
//             <TextField id="tel" label="Tel" variant="standard" value={tel} onChange={(e)=>setTel(e.target.value)}/>
//             <TextField id="email" label="Email" variant="standard" value={email} onChange={(e)=>setEmail(e.target.value)}/>
//             <TextField id="password" label="Password" variant="standard" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
//             <Button variant="contained" className="text-sky-800 bg-white" onClick={()=>register()}>Submit</Button>
//         </FormControl>
//     )
// }