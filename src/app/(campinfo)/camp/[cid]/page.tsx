import getCar from "@/libs/getCar"
import { ClassNames } from "@emotion/react"
import { Button } from "@mui/material"
import Image from "next/image"

export default async function CarDetailPage({params} : {params:{cid:string}}) {
    const campgroundDetail = await getCar(params.cid)

    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-bold">Car ID {params.cid}</h1>
            <div className="flex flex-row my-5">
                <Image src={campgroundDetail.data.picture} alt='campgroungImg' width={0} height={0} sizes="100vw" className="rounded-lg w-[30%]"/>
                <div className="w-3/5 m-4 flex flex-col text-left">
                    <div className="text-md font-medium mx-5">{campgroundDetail.data.name}</div>
                    <div className="text-md mx-5">Address : {campgroundDetail.data.address}</div>
                    <div className="text-md mx-5">District : {campgroundDetail.data.district}</div>
                    <div className="text-md mx-5">Province : {campgroundDetail.data.province}</div>
                    <div className="text-md mx-5">Postal Code : {campgroundDetail.data.postalcode}</div>
                    <Button variant="contained" href={`/booking?id=${params.cid}&campground=${campgroundDetail.data.name}`} className="w-2/5 min-w-60">Book</Button>
                </div>
            </div>
        </main>
    )
}