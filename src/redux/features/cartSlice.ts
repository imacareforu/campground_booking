import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type CartState = {bookingItems:BookingItem[]}

const initialState:CartState = {bookingItems:[]}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers : {
        addReservation: (state,action:PayloadAction<BookingItem>) => {
            state.carItems.push(action.payload)
        },
        removeReservation: (state,action:PayloadAction<BookingItem>) => {
            const remainItems = state.carItems.filter(obj => {
                return (obj.userRole=='admin'? true: obj.user==action.payload.user)
            })

            state.carItems = remainItems
        }
    }
})

export const {addReservation,removeReservation} = cartSlice.actions
export default cartSlice.reducer