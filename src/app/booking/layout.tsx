import BookingMenu from "@/components/BookingMenu";

export default function ReservationLayout({children} : {children:React.ReactNode}) {
    return(
        <div className='flex flex-row p-5'>
            <BookingMenu/>
            {children}
        </div>
    );
}