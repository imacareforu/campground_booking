import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type CartState = {bookingList:BookingItem[]}

const initialState:CartState = {bookingList:[]}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers : {
        addReservation: (state,action:PayloadAction<BookingItem>) => {
            state.bookingList.push(action.payload)
        },
        removeReservation: (state,action:PayloadAction<BookingItem>) => {
            const remainItems = state.bookingList.filter(obj =>  {
                return obj.user===action.payload.user
            })

            state.bookingList = remainItems
        }
    }
})

export const {addReservation,removeReservation} = cartSlice.actions
export default cartSlice.reducer