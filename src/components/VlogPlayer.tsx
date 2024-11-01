'use client'
import useWindowListener from "@/hooks/useWindowListener"
import { useRef,useEffect,useState } from "react"

export default function VlogPlayer({vdoSrc,isPlaying} : {vdoSrc:string,isPlaying:boolean}) {
    const vdoRef = useRef<HTMLVideoElement>(null)
    
    //useWindowListener("resize",()=>{alert(window.innerWidth)})

    useEffect(()=>{
        // alert("yay")
        if(isPlaying) vdoRef.current?.play()
        else vdoRef.current?.pause()
    },[isPlaying])

    return(
        <video className="w-3/5" src={vdoSrc} ref={vdoRef} controls loop muted/>
    )
}