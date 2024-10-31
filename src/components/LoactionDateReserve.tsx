'use client'

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"

export default function LacationDateReserve({onDateChange}:{onDateChange:Function}) {

    return(
        <div className='bg-slate-200 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onChange={(value)=>onDateChange(value)} className="bg-white"/>
            </LocalizationProvider>
        </div>
    );
}