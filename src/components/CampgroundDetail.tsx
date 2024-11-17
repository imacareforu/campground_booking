'use client'

import { CampgroundItem } from "../../interface";
import Image from "next/image";
import { Button } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";
import deleteCampground from "@/libs/deleteCampground";
import editCampground from "@/libs/editCampground";

export default function CampgroundDetail({ cid, campgroundDetail, admin, token }: { cid: string, campgroundDetail: CampgroundItem, admin: boolean, token: string }) {

    const [editing, setEditing] = useState(false)
    const router = useRouter()

    const [address,setAddress] = useState(campgroundDetail.address)
    const [district,setDistrict] = useState(campgroundDetail.district)
    const [province,setProvince] = useState(campgroundDetail.province)
    const [postalcode,setPostalcode] = useState(campgroundDetail.postalcode)
    const [tel,setTel] = useState(campgroundDetail.tel)

    async function removeCampground() {
        await deleteCampground(token, cid)
        router.push('/campground')
        router.refresh()
    }

    async function updateCampground() {
        await editCampground(token, cid,campgroundDetail.name, address, district, province, postalcode, tel, campgroundDetail.picture).then(()=>setEditing(false))
        router.refresh()
    }

    return (
        <div className="text-center p-5">
            <h1 className="text-2xl font-bold">{campgroundDetail.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={campgroundDetail.picture} alt='campgroungImg' width={0} height={0} sizes="100vw" className="rounded-lg w-[30%]" />
                <div className="w-3/5 m-4 flex flex-col text-left space-y-2">
                    <div className="text-md font-medium mx-5">{campgroundDetail.name}</div>
                    <div className="text-md mx-5">Address : {campgroundDetail.address}</div>
                    <div className="text-md mx-5">District : {campgroundDetail.district}</div>
                    <div className="text-md mx-5">Province : {campgroundDetail.province}</div>
                    <div className="text-md mx-5">Postal Code : {campgroundDetail.postalcode}</div>
                    <div className="text-md mx-5">Tel : {campgroundDetail.tel}</div>
                    <Button variant="contained" href={`/booking?id=${cid}&campground=${campgroundDetail.name}`} className="w-2/5 min-w-60">Book</Button>
                    {admin ?
                        <div className="w-2/5 flex mt-5 min-w-60 space-x-4">
                            <Button variant="outlined" className="w-1/2" onClick={removeCampground}>delete</Button>
                            <Button variant="outlined" className="w-1/2" onClick={()=>setEditing(!editing)}>{editing? 'cancle':'edit'}</Button>
                        </div> : null}
                </div>
            </div>
            {editing? <div className="bg-lime-50 space-y-2 py-3 border-2 rounded-lg border-lime-300">
                <div className="flex">
                    <label className="mt-auto mb-auto w-40 text-lime-900 pr-4">Address</label>
                    <TextField hiddenLabel defaultValue={campgroundDetail.address} variant="standard" className="w-1/2" onChange={e=>setAddress(e.target.value)}/>
                </div>
                <div className="flex">
                    <label className="mt-auto mb-auto w-40 text-lime-900 pr-4">District</label>
                    <TextField hiddenLabel defaultValue={campgroundDetail.district} variant="standard" className="w-1/2" onChange={e=>setDistrict(e.target.value)}/>
                </div>
                <div className="flex">
                    <label className="mt-auto mb-auto w-40 text-lime-900 pr-4">Province</label>
                    <TextField hiddenLabel defaultValue={campgroundDetail.province} variant="standard" className="w-1/2" onChange={e=>setProvince(e.target.value)}/>
                </div>
                <div className="flex">
                    <label className="mt-auto mb-auto w-40 text-lime-900 pr-4">Postal Code</label>
                    <TextField hiddenLabel defaultValue={campgroundDetail.postalcode} variant="standard" className="w-1/2" onChange={e=>setPostalcode(e.target.value)}/>
                </div>
                <div className="flex">
                    <label className="mt-auto mb-auto w-40 text-lime-900 pr-4">Telephone</label>
                    <TextField hiddenLabel defaultValue={campgroundDetail.tel} variant="standard" className="w-1/2" onChange={e=>setTel(e.target.value)}/>
                </div>
                <Button variant="contained" onClick={updateCampground}>update</Button>
            </div> : null}
        </div>
    )
}