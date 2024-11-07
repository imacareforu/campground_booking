export default function ManageReservationLayout({children,dashboard,manage} : {children:React.ReactNode,dashboard:React.ReactNode,manage:React.ReactNode}) {
    return(
        <div className="text-center text-lg flex flex-col w-full">
            {children}
            {dashboard}
            {manage}
        </div>
    )
}