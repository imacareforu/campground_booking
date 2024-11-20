'use client'

import { useRouter } from "next/navigation"
import { Button } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import makeCampground from "@/libs/makeCampground";

export default function CampgroundForm({userToken}:{userToken:string}) {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [district, setDistrict] = useState('')
    const [province, setProvince] = useState('')
    const [postalcode, setPostalcode] = useState('')
    const [tel, setTel] = useState('')
    const [pic,setPic] = useState('')

    const router = useRouter()

    async function createCampground() {
        await makeCampground(userToken,name, address, district, province, postalcode, tel, pic)
        alert('create success')
        router.push('/campground')
    }

    return (
        <div className="bg-gray-200 space-y-2 py-3 mx-2 border-2 rounded-lg border-gray-400">
            <div className="flex">
                <label className="mt-auto mb-auto w-40 text-lime-900 pr-4">Name</label>
                <TextField hiddenLabel placeholder="Campground Name" variant="standard" className="w-1/2" onChange={e => setName(e.target.value)} />
            </div>
            <div className="flex">
                <label className="mt-auto mb-auto w-40 text-lime-900 pr-4">Address</label>
                <TextField hiddenLabel placeholder="Campground Address" variant="standard" className="w-1/2" onChange={e => setAddress(e.target.value)} />
            </div>
            <div className="flex">
                <label className="mt-auto mb-auto w-40 text-lime-900 pr-4">District</label>
                <TextField hiddenLabel placeholder="District" variant="standard" className="w-1/2" onChange={e => setDistrict(e.target.value)} />
            </div>
            <div className="flex">
                <label className="mt-auto mb-auto w-40 text-lime-900 pr-4">Province</label>
                <TextField hiddenLabel placeholder="Province" variant="standard" className="w-1/2" onChange={e => setProvince(e.target.value)} />
            </div>
            <div className="flex">
                <label className="mt-auto mb-auto w-40 text-lime-900 pr-4">Postal Code</label>
                <TextField hiddenLabel placeholder="Postalcode (not exceed 5 digits)" variant="standard" className="w-1/2" onChange={e => setPostalcode(e.target.value)} />
            </div>
            <div className="flex">
                <label className="mt-auto mb-auto w-40 text-lime-900 pr-4">Telephone</label>
                <TextField hiddenLabel placeholder="Telephone" variant="standard" className="w-1/2" onChange={e => setTel(e.target.value)} />
            </div>
            <div className="flex">
                <label className="mt-auto mb-auto w-40 text-lime-900 pr-4">picture</label>
                <TextField hiddenLabel placeholder="https://drive.google.com/uc?id=??????????????????????????" variant="standard" className="w-1/2" onChange={e => setPic(e.target.value)} />
            </div>
            <Button variant="contained" onClick={createCampground}>create</Button>
        </div>
    )
}