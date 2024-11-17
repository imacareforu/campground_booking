import * as React from 'react';
import getCampgrounds from "@/libs/getCampgrounds";
import BookingForm from "@/components/BookingForm";

export default async function Booking() {
    const campgroundJson = await getCampgrounds()
    return (
        <BookingForm campgroundJson={campgroundJson}/>
    );
}