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
    console.log(session?.user.token)

    return (
        <div className='p-2 block relative h-[80vh] text-shadow-2' onClick={()=>setIndex(index+1)}>
            <Image src={covers[index%3]} alt='cover' fill={true} priority objectFit='cover'></Image>
            <div className='text-center z-20 m-12 relative'>
                <h1 className='text-3xl text-white font-medium font-sans'>Your Travel Partner</h1>
                <h3 className='text-lg text-white font-sans'>Escape to Nature, Reserve Your Spot Today!</h3>
            </div>
            {session? <div className='absolute right-5 top-2 text-cyan-100 tracking-wider font-semibold text-xl'>Hello {session.user?.name} </div>:null}
            <button onClick={(e)=>{e.stopPropagation();router.push('/car')}}
            className='z-30 bg-white text-cyan-600 border border-cyan-600 absolute bottom-0 right-0 
            m-4 px-2 py-1 rounded-lg font-semibold hover:border-transparent hover:text-white hover:bg-cyan-600'>
            Select your partner NOW</button>
        </div>
    );
}