export default async function getBookings(token:string|undefined) {

    const response = await fetch("https://campground-backend-kappa.vercel.app:443/api/v1/bookings",{
        method:"GET",
        headers:{
            authorization: `Bearer ${token}`
        }
    })

    if(!response.ok) throw new Error("cannot get booking list")
    if(!token) throw new Error("cannot find token")
    return await response.json()
}