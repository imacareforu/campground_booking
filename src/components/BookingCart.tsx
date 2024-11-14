import { AppDispatch, useAppSelector } from "@/redux/store";
import { BookingItem } from "../../interface";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { removeBooking } from "@/redux/features/cartSlice";
import getBookings from "@/libs/getBookings";
import { useSession } from "next-auth/react";
import getCampgrounds from "@/libs/getCampgrounds";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/AuthOption";
import getCampground from "@/libs/getCampground";
import RemoveBookingButton from "./RemoveBookingButton";
import { useRouter } from "next/navigation";
import deleteBooking from "@/libs/deleteBooking";
import { revalidateTag } from "next/cache";


export default async function BookingCart() {
    

    const session = await getServerSession(authOption)
    const bookings =  await getBookings(session?.user.token)
    
    async function getC(id:string){
        const camp = await getCampground(id)
        return camp.data.name
    }
    
    

    return (
        <>
        <p className="text-center font-bold text-2xl p-8">Here your Cart</p>
        {
            (bookings.count==0)? <p className="text-center">No campground booking</p>:
            bookings.data.map((item:BookingItem)=>(
                <div className="rounded bg-slate-200 px-5 mx-5 py-2 my-2">
                    <div className="text-sm">{item.campground.name}</div>
                    <div className="text-sm">Booking Date : {item.bookingDate.substring(0, 10)}</div>
                    <div className="text-sm">Checkout Date : {item.checkoutDate.substring(0, 10)}</div>
                    <RemoveBookingButton bid={item._id}/>
                </div>
            ))
        }
        </>
    )

}