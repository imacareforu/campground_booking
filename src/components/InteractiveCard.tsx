'use client'

export default function InteractiveCard({children} : {children : React.ReactNode}) {

    function onMouseOut(event:React.BaseSyntheticEvent) {
        event.currentTarget.classList.remove('shadow-2xl')
        event.currentTarget.classList.add('shadow-lg')
    }

    function onMouseOver(event:React.SyntheticEvent) {
        event.currentTarget.classList.remove('shadow-lg')
        event.currentTarget.classList.add('shadow-2xl')
    }

    return(
        <div className='rounded-lg border-black border-solid shadow-lg border m-2 h-80'
        onMouseOut = {(e) => onMouseOut(e)}
        onMouseOver = {(e) => onMouseOver(e)}>
            {children}
        </div>
    );
}