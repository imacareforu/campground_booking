'use client'

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Banner() {
    const covers = ['/img/cover2.jpg','/img/cover3.jpg','/img/cover.jpg']
    const [index,setIndex] = useState(0)
    
    const router = useRouter()
    const {data:session} = useSession()

    return (
        <div className='p-2 block relative h-[55vh] text-shadow-2 font-sans' onClick={()=>setIndex(index+1)}>
            <Image className="brightness-75 object-cover" src={covers[index%3]} alt='cover' fill={true} priority></Image>
            <div className='text-center z-20 m-12 relative'>
                <h1 className='text-[120px] text-white font-medium tracking-widest drop-shadow-2xl font-sans'>CAMPBOOKER</h1>
            </div>
            {session? 
                <div className='absolute right-5 top-2 text-white tracking-wider font-semibold text-xl'>
                Welcome {session.user?.name} 
                </div>
            :null}
            <button onClick={(e)=>{e.stopPropagation();router.push('/campground')}}
            className='z-30 bg-neutral-700 text-white absolute bottom-0 right-0 
            m-4 px-5 py-2 rounded-full hover:text-amber-500 focus:shadow-md focus:shadow-white-500'>
            Explore Campsites</button>
        </div>
    );
}