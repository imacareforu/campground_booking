import ReservationMenu from "@/components/ReservationMenu";

export default function ReservationLayout({children} : {children:React.ReactNode}) {
    return(
        <div className='flex flex-row p-5'>
            <ReservationMenu/>
            {children}
        </div>
    );
}