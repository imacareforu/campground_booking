'use client'

import { BookingItem, BookingJson } from "../../interface";
import RemoveBookingButton from "./RemoveBookingButton";
import EditBookingButton from "./EditBookingButton";

export default function BookingCart({bookings,userRole,userToken}:{bookings:BookingJson,userRole:string,userToken:string}) {

    return (
        <>
        <p className="text-center font-bold text-2xl p-8">Here your Cart</p>
        {
            (bookings.count==0)? <p className="text-center">No campground booking</p>:
            bookings.data.map((item:BookingItem)=>(
                <div className="rounded bg-slate-200 px-5 mx-5 py-2 my-2 space-y-1" key={item._id}>
                    <div className="font-medium">{item.campground.name}</div>
                    {(userRole=='admin')? <div className="text-sm">user : {item.user}</div>:null}
                    <div className="text-sm">Booking Date : {item.bookingDate.substring(0, 10)}</div>
                    <div className="text-sm">Checkout Date : {item.checkoutDate.substring(0, 10)}</div>
                    <RemoveBookingButton bid={item._id} userToken={userToken}/>
                    <EditBookingButton bid={item._id} userToken={userToken}/>
                </div>
            ))
        }
        </>
    )

}