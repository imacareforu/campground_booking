import Link from 'next/link'

export default function ReservationMenu() {
    return(
        <div className='min-w-40 min-h-28 border-black border rounded-xl place-items-center'>
            <div className='bg-emerald-100 w-full text-center rounded-t-xl h-10 pt-2 mb-5'>Sub-Menu</div>
            <Link href='/reservations/manage' className='bg-blue-200 p-2 rounded'>manage page</Link>
        </div>
    )
}