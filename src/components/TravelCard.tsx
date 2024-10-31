'use client'

import VlogPlayer from "./VlogPlayer"
import { useState } from "react"
import { Rating } from "@mui/material"
import useWindowListener from "@/hooks/useWindowListener"

export default function TravelCard() {
    const [playing,setPlayer] = useState(true)

    return(
        <div className="w-4/5 shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-rox">
            <VlogPlayer vdoSrc="/video/Sunrise.mp4" isPlaying={playing}/>
            <div className="flex flex-col px-4 py-2">
                <p>Thailand Nature</p>
            </div>
        </div>
    )
}