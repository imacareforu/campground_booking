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
    const [customerName, setCustomerName] = useState<String>('')

    const dispatch = useDispatch<AppDispatch>()

    const makeReservation = ()=>{

        if(cid&&campground&&bookingDate&&checkoutDate) {
            const booking : BookingItem = {
                bookingDate: bookingDate,
                checkoutDate: checkoutDate,
                user: customerName,
                campground: campground,
            }

            dispatch(addReservation(booking))
        }

        else if(!cid) alert('please select campground!')
        else if(!bookingDate) alert('please select booking date!')
        else if(!checkoutDate) alert('please select checkout date!')
    }

    return(
        <main className='w-[100%] flex flex-col bg-purple-50 m-3 rounded-xl items-center space-y-4'>
            <div className='text-xl text-center font-medium rounded-t bg-violet-200 w-full p-2'>New Booking</div>
            <div className="text-lg font-medium flex flex-row">{campground? `Car ${campground}`:'No Campground Selected!'}</div>
            <TextField id="customerName" label="Customer Name" variant="standard" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
            <div className="bg-slate-500 w-fit space-y-2 p-2 rounded-lg">
                <p className="text-center text-white">Booking Date</p>
                <LacationDateReserve onDateChange={(value:Dayjs)=>setBookingDate(value)}/>
                
            </div>
            <div className="bg-slate-500 w-fit space-y-2 p-2 rounded-lg">
                <p className="text-center text-white">Checkout Date</p>
                <LacationDateReserve onDateChange={(value:Dayjs)=>setCheckoutDate(value)}/>
            </div>
            <Button className='block rounded-md bg-sky-600 text-black px-3 py-2 hover:bg-sky-500' onClick={makeReservation}>Book</Button>
        </main>
    );
}