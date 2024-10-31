'use client'

import { AppDispatch, useAppSelector } from "@/redux/store";
import { ReservationItem } from "../../inteface";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { removeReservation } from "@/redux/features/cartSlice";

export default function ReservationCart() {
    
    const campgroundItems = useAppSelector((state)=>state.cartSlice.campgroundItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        <p className="text-center font-bold text-2xl p-8">Here your Cart</p>
        {
            (campgroundItems.length==0)? <p className="text-center">No campground booking</p>:
            campgroundItems.map((item:BookingItem)=>(
                <div className="rounded bg-slate-200 px-5 mx-5 py-2 my-2" key={item.carID}>
                    <div className="text-xl">{item.campground}</div>
                    <div className="text-sm">Booking Date : {item.bookingDate}</div>
                    <div className="text-sm">Checkout Date : {item.checkoutDate}</div>
                    <Button onClick={()=>dispatch(removeReservation(item))} variant='contained'>Remove reservation</Button>
                </div>
            ))
        }
        </>
    )
}