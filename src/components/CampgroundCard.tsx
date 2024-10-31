'use client'

import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function ProductCard({campgroundName, imgSrc} : {campgeoundName:string , imgSrc:string}) {

    return(
        <InteractiveCard>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc} alt='Product Picture' fill={true} objectFit='contain'></Image>
            </div>
            <div className='w-full h-[15%] text-black text-center'>
                {campgroundName}
            </div>
        </InteractiveCard>
    );
}