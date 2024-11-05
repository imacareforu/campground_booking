import Link from 'next/link'

export default function TopMenuItem({title,pageRef} : {title:string,pageRef:string}) {
    return (
        <Link href={pageRef} className='w-28 text-center mt-auto mb-auto font-sans text-lg text-white hover:text-amber-500'>
            {title}
        </Link>
    );
}