import Link from 'next/link'

export default function TopMenuItem({title,pageRef} : {title:string,pageRef:string}) {
    return (
        <Link href={pageRef} className='w-28 text-center mt-auto mb-auto font-sans lg:text-lg md:text-base sm:text-sm text-white hover:text-amber-500 mx-1'>
            {title}
        </Link>
    );
}