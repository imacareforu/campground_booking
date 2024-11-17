'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function TravelCard() {
    const [playing,setPlayer] = useState(true)
    const router = useRouter()

    return(
        <div className="w-4/5 shadow-lg mx-[10%] my-10 p-2 bg-gray-100 flex flex-rox">
            <video className="w-3/5" src="/video/Sunrise.mp4" controls autoPlay loop muted/>
            <div className="flex flex-col px-4 py-2">
                <p>Thailand Nature</p>
                <button onClick={(e)=>{e.stopPropagation();router.push('/camp')}}
            className='z-30 bg-neutral-700 text-white
            m-4 px-5 py-2 rounded-full hover:text-amber-500 focus:shadow-md focus:shadow-neutral-300'>
            Explore Campsites</button>
            </div>
        </div>
    )
}