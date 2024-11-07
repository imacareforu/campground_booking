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

export default function BookingForm({ campgroundJson }: { campgroundJson: CampgroundJson }) {
    const [open, setOpen] = React.useState(false);

    const urlParams = useSearchParams()
    const cid = urlParams.get('id')
    const campgroundFromURL = urlParams.get('campground')

    const [bookingDate, setBookingDate] = useState<Dayjs | null>(null)
    const [checkoutDate, setCheckoutDate] = useState<Dayjs | null>(null)
    const [customerName, setCustomerName] = useState<string>('')
    const [campground, setCampground] = useState<string>('')

    React.useEffect(() => {
        if (campgroundFromURL) setCampground(campgroundFromURL)
    }, [campgroundFromURL])

    const dispatch = useDispatch<AppDispatch>()

    const makeReservation = () => {

        if (cid && campground && bookingDate && checkoutDate) {
            const booking: BookingItem = {
                bookingDate: dayjs(bookingDate).format('YYYY/MM/DD'),
                checkoutDate: dayjs(checkoutDate).format('YYYY/MM/DD'),
                user: customerName,
                campground: campground
            }

            dispatch(addBooking(booking))
        }

        else if (!cid) alert('please select campground!')
        else if (!bookingDate) alert('please select booking date!')
        else if (!checkoutDate) alert('please select checkout date!')
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
                                onChange={e => setCampground(e.target.value as string)}
                                input={<OutlinedInput label="Campground" />}>
                                {
                                    campgroundJson.data.map((item: CampgroundItem) => (
                                        <MenuItem value={item.name}>{item.name}</MenuItem>
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
            <TextField id="customerName" label="Customer Name" variant="standard" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
            <div className="flex flex-row">
                <LacationDateReserve label="Check-In Date" onDateChange={(value: Dayjs) => setBookingDate(value)} />
                <LacationDateReserve label="Check-Out Date" onDateChange={(value: Dayjs) => setCheckoutDate(value)} />
            </div>
            <button className='block rounded-lg bg-neutral-700 p-2 text-white hover:text-amber-500' onClick={makeReservation}>Book</button>
        </div>
    )
}