'use client'

import LacationDateReserve from "@/components/LoactionDateReserve";
import { AppDispatch } from "@/redux/store";
import { Button } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BookingItem } from "../../../interface";
import { addReservation } from "@/redux/features/cartSlice";
import TextField from '@mui/material/TextField';

export default function Reservations() {

    const urlParams = useSearchParams()
    const cid = urlParams.get('id')
    const campground = urlParams.get('campground')

    const [bookingDate,setBookingDate] = useState<Dayjs|null>(null)
    const [checkoutDate,setCheckoutDate] = useState<Dayjs|null>(null)
    const [customerName, setCustomerName] = useState<string>('')

    const dispatch = useDispatch<AppDispatch>()

    const makeReservation = ()=>{

        if(cid&&campground&&bookingDate&&checkoutDate) {
            const booking : BookingItem = {
                bookingDate: dayjs(bookingDate).format('YYYY/MM/DD'),
                checkoutDate: dayjs(checkoutDate).format('YYYY/MM/DD'),
                user: customerName,
                campground: campground
            }

            dispatch(addReservation(booking))
        }

        else if(!cid) alert('please select campground!')
        else if(!bookingDate) alert('please select booking date!')
        else if(!checkoutDate) alert('please select checkout date!')
    }

    return(
        <main className='w-[100%] flex flex-col m-3 rounded-xl items-center space-y-4'> 
                <div className="bg-orange-100 p-5 rounded-xl">
                    <div className='text-xl font-medium'>New Booking</div>
                    <div className="text-lg font-medium flex flex-row">{campground? `Car ${campground}`:'No Campground Selected!'}</div>
                    <TextField id="customerName" label="Customer Name" variant="standard" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                    <div className="flex flex-row">
                        <LacationDateReserve label="Check-In Date" onDateChange={(value:Dayjs)=>setBookingDate(value)}/>
                        <LacationDateReserve label="Check-Out Date" onDateChange={(value:Dayjs)=>setCheckoutDate(value)}/>
                    </div>
                    <button className='block rounded-lg bg-neutral-700 p-2 text-white hover:text-amber-500' onClick={makeReservation}>Book</button>
                </div>
        </main>
    );
}