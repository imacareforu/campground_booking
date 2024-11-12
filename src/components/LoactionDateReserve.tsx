'use client'

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"

export default function LacationDateReserve({onDateChange, label, id}:{onDateChange:Function, label:string, id:string}) {

    return(
        <div className='rounded-lg space-x-5 space-y-2 w-fit px-3 py-5 flex flex-row justify-center' id={label}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker  onChange={(value)=>onDateChange(value)} className="bg-white" label={label}/>
            </LocalizationProvider>
        </div>
    );
}