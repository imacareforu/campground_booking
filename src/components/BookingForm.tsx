'use client'

import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem";
import * as React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import { Button } from "@mui/material";
import { CampgroundItem, CampgroundJson } from "../../interface";
import LocationDateReserve from "@/components/LocationDateReserve";
import dayjs, { Dayjs } from "dayjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import makeBooking from "@/libs/makeBooking";
import { useSession } from "next-auth/react";

export default function BookingForm({ campgroundJson }: { campgroundJson: CampgroundJson }) {
    const [open, setOpen] = React.useState(false);

    const urlParams = useSearchParams()
    const cidFromURL = urlParams.get('id')
    const campgroundFromURL = urlParams.get('campground')

    const {data:session} = useSession()

    const [bookingDate, setBookingDate] = useState<Dayjs | null>(null)
    const [checkoutDate, setCheckoutDate] = useState<Dayjs | null>(null)
    const [campground, setCampground] = useState<string>('')
    const [cid, setCid] = useState<string>('')

    React.useEffect(()=>{
        if(cidFromURL) setCid(cidFromURL)
        if(campgroundFromURL) setCampground(campgroundFromURL)
    },[campgroundFromURL,cidFromURL])

    const router = useRouter()
 
    async function booking() {
        if(!session || !session.user.token) alert('please sign-in to make booking')
        else if (!cid) alert('please select campground!')
        else if (!bookingDate) alert('please select booking date!')
        else if (!checkoutDate) alert('please select checkout date!')
        else {
            const bd = dayjs(bookingDate, "YYYY-MM-DD").toDate()
            const cd = dayjs(checkoutDate, "YYYY-MM-DD").toDate()
            const today = new Date()
            if (bd < today) alert("check-in date is invalid \n(check-in before today)")
            else if (cd < today || cd < bd) alert("check-out date is invalid \n(check-out before today or check-out before check-in")
            else if (checkoutDate.diff(bookingDate, "day")<1 || checkoutDate.diff(bookingDate, "day")>3) alert("can book only from 1 up to 3 nights")
            else {
                await makeBooking(session.user.token, bd, cd, session.user._id, cid)
                alert("book success")
                router.push('/cart')
                router.refresh()
            }
        }
    }

    return (
        <div className="bg-gray-100 p-5 rounded-xl my-12 w-4/5 mr-auto ml-auto">
            <div className='text-2xl font-medium mb-4'>New Booking</div>
            <button onClick={() => setOpen(true)} className="block w-full text-black hover:bg-slate-50">{campground ? campground : "No Campground Select!"}</button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>please select campground</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl sx={{ m: 1, minWidth: 200 }}>
                            <InputLabel htmlFor="demo-dialog-native">Campground</InputLabel>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={campground}
                                onChange={e => {setCampground(e.target.value as string)}}
                                input={<OutlinedInput label="Campground" />}>
                                {
                                    campgroundJson.data.map((item: CampgroundItem) => (
                                        <MenuItem key={item._id} value={item.name} onClick={()=>{setCid(item._id)}}>{item.name}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Ok</Button>
                </DialogActions>
            </Dialog>
            <div className="flex flex-row justify-center">
                <LocationDateReserve label="Check-In Date" onDateChange={(value: Dayjs) => setBookingDate(value)} />
                <LocationDateReserve label="Check-Out Date" onDateChange={(value: Dayjs) => setCheckoutDate(value)}/>
            </div>
            <button className='place-self-end block rounded-full bg-neutral-700 p-2 text-white hover:text-amber-500' onClick={booking}>Book</button>
        </div>
    )
}



