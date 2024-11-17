export default async function getBookings(token:string) {

    const response = await fetch("https://campground-backend-kappa.vercel.app:443/api/v1/bookings",{
        method:"GET",
        headers:{
            authorization: `Bearer ${token}`
        },next:{tags:['bookings']}
    })

    if(!response.ok) throw new Error("cannot get booking list")
    if(!token) throw new Error("cannot find token")
    return await response.json()
}