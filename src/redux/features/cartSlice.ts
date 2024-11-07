import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type CartState = {bookingItems:BookingItem[]}

const initialState:CartState = {bookingItems:[]}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers : {
        addBooking: (state,action:PayloadAction<BookingItem>) => {
            state.bookingItems.push(action.payload)
        },
        removeBooking: (state,action:PayloadAction<BookingItem>) => {
            const remainItems = state.bookingItems.filter(obj =>  {
                return obj.user===action.payload.user
            })

            state.bookingItems = remainItems
        }
    }
})

export const {addBooking,removeBooking} = cartSlice.actions
export default cartSlice.reducer