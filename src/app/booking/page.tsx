import LacationDateReserve from "@/components/LoactionDateReserve";
import { AppDispatch } from "@/redux/store";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BookingItem } from "../../../interface";
import { addBooking } from "@/redux/features/cartSlice";
import TextField from '@mui/material/TextField';
import * as React from 'react';
import getCampgrounds from "@/libs/getCampgrounds";
import BookingForm from "@/components/BookingForm";

export default async function Reservations() {

    return (
        <BookingForm campgroundJson={await getCampgrounds()}/>
    );
}