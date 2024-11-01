'use client'

import VlogPlayer from "./VlogPlayer"
import { useState } from "react"
import { Rating } from "@mui/material"
import useWindowListener from "@/hooks/useWindowListener"
import { useRouter } from "next/navigation"

export default function TravelCard() {
    const [playing,setPlayer] = useState(true)
    const router = useRouter()

    return(
        <div className="w-4/5 shadow-lg mx-[10%] my-10 p-2 bg-gray-100 flex flex-rox">
            <VlogPlayer vdoSrc="/video/Sunrise.mp4" isPlaying={playing}/>
            <div className="flex flex-col px-4 py-2">
                <p>Thailand Nature</p>
                <button onClick={(e)=>{e.stopPropagation();router.push('/car')}}
            className='z-30 bg-neutral-700 text-white
            m-4 px-5 py-2 rounded-full hover:text-amber-500 focus:shadow-md focus:shadow-neutral-300'>
            Explore Campsites</button>
            </div>
        </div>
    )
}