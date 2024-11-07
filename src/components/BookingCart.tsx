'use client'

import { AppDispatch, useAppSelector } from "@/redux/store";
import { BookingItem } from "../../interface";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { removeBooking } from "@/redux/features/cartSlice";

export default function BookingCart() {
    
    const bookingItems = useAppSelector((state)=>state.cartSlice.bookingItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        <p className="text-center font-bold text-2xl p-8">Here your Cart</p>
        {
            (bookingItems.length==0)? <p className="text-center">No campground booking</p>:
            bookingItems.map((item:BookingItem)=>(
                <div className="rounded bg-slate-200 px-5 mx-5 py-2 my-2">
                    <div className="text-xl">{item.campground}</div>
                    <div className="text-sm">Booking Date : {item.bookingDate}</div>
                    <div className="text-sm">Checkout Date : {item.checkoutDate}</div>
                    <Button onClick={()=>dispatch(removeBooking(item))} variant='contained'>Remove reservation</Button>
                </div>
            ))
        }
        </>
    )
}