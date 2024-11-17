import BookingSubMenu from "@/components/BookingSubMenu";

export default function ReservationLayout({children} : {children:React.ReactNode}) {
    return(
        <div className='flex flex-row p-5'>
            <BookingSubMenu/>
            {children}
        </div>
    );
}