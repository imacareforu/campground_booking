import Link from 'next/link'

export default function BookingSubMenu() {
    return(
        <div className='min-w-40 min-h-28 border-black border rounded-xl place-items-center'>
            <div className='bg-gray-300 w-full text-center rounded-t-xl h-10 pt-2 mb-5'>Sub-Menu</div>
            <Link href='/booking/manage' className='bg-neutral-700 p-2 rounded-full text-white hover:text-amber-500'>manage</Link>
        </div>
    )
}