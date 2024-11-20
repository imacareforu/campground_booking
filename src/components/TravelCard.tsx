'use client'

import { useRouter } from "next/navigation"

export default function TravelCard() {
    const router = useRouter()

    return(
        <div className="w-4/5 shadow-lg mx-[10%] my-10 p-2 bg-gray-100 flex flex-row">
            <video className="w-3/5" src="/video/Sunrise.mp4" controls autoPlay loop muted/>
            <div className="flex flex-col px-4 py-2">
                <p className="font-bold mb-5 text-xl">CAMPBOOKER</p>
                <p className="indent-10 mb-10 leading-8">Easily discover and book your perfect campsite. 
                    Whether you're seeking a peaceful retreat or an adventure-filled getaway, 
                    CampBooker makes planning your outdoor escape simple and stress-free. 
                </p>
                <p className="mb-5">Your next adventure starts here!</p>
                <button onClick={(e)=>{e.stopPropagation();router.push('/campground')}}
            className='z-30 bg-neutral-700 text-white
            m-4 px-5 py-2 rounded-full hover:text-amber-500 focus:shadow-md focus:shadow-neutral-300'>
            Explore Campsites</button>
            </div>
        </div>
    )
}