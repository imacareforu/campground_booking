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
import LacationDateReserve from "@/components/LoactionDateReserve";
import { AppDispatch } from "@/redux/store";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BookingItem } from "../../interface";
import { addBooking } from "@/redux/features/cartSlice";
import TextField from '@mui/material/TextField';
import getCampgrounds from "@/libs/getCampgrounds";
import makeBooking from "@/libs/makeBooking";
import { useSession } from "next-auth/react";
import { SearchSharp } from "@mui/icons-material";

export default function BookingForm({ campgroundJson }: { campgroundJson: CampgroundJson }) {
    const [open, setOpen] = React.useState(false);

    const urlParams = useSearchParams()

    const campgroundFromURL = urlParams.get('campground')

    const {data:session} = useSession()
    const user = session?.user._id
    const token = session?.user.token


    const [bookingDate, setBookingDate] = useState<Dayjs | null>(null)
    const [checkoutDate, setCheckoutDate] = useState<Dayjs | null>(null)
    const [campground, setCampground] = useState<string>('')
    const [cid, setCid] = useState<string | null>(urlParams.get('id'))

    React.useEffect(() => {
        if (campgroundFromURL) setCampground(campgroundFromURL)
    }, [campgroundFromURL])



 
    function booking() :any{
        if (!cid) console.log('please select campground!')
        else if (!bookingDate) console.log('please select booking date!')
        else if (!checkoutDate) console.log('please select checkout date!')
        const bd = dayjs(bookingDate, "YYYY-MM-DD").toDate()
        const cd = dayjs(checkoutDate, "YYYY-MM-DD").toDate()
        if (campground && bookingDate && checkoutDate)
            makeBooking(token, bd, cd, user, cid)
    }


    return (
        <div className="bg-orange-100 p-5 rounded-xl m-12">
            <div className='text-xl font-medium'>New Booking</div>
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
            <div className="flex flex-row">
                <LacationDateReserve label="Check-In Date" onDateChange={(value: Dayjs) => setBookingDate(value)} id="" />
                <LacationDateReserve label="Check-Out Date" onDateChange={(value: Dayjs) => setCheckoutDate(value)} id=""/>
            </div>
            <button className='block rounded-lg bg-neutral-700 p-2 text-white hover:text-amber-500' onClick={booking}>Book</button>
        </div>
    )
}



