'use client'

import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from "next/link";

export default function TopMenu() {
    const {data:session} = useSession()

    return (
        <div className='h-20 fixed bg-neutral-700 flex z-30 inset-0 w-full flex-row opacity-95'>
            <Link href='/' className='min-w-20 w-28 text-center mt-auto mb-auto font-sans text-lg text-white ml-4'>
                <Image src={'/img/logo.png'} className='h-auto w-auto max-h-[70px]' alt='logo' width={0} height={0} sizes="100vh"/>
            </Link>
            <div className='flex flex-row w-1/2'>
                <TopMenuItem title='Campgrounds' pageRef='/campground'/>
                <TopMenuItem title='Booking' pageRef='/booking'/>
                <TopMenuItem title='Cart' pageRef='/cart' />
                <TopMenuItem title='About' pageRef='/about'/>
            </div>
            <div className='w-1/2 flex flex-row-reverse'>
                {
                session? <TopMenuItem title='Sign-out' pageRef='/api/auth/signout'/>
                : <TopMenuItem title='Register' pageRef='/register'/>
                }
                {
                    session ? null : <TopMenuItem title='Sign-in' pageRef='/api/auth/signin' />
                }
            </div>
        </div>
    );
}