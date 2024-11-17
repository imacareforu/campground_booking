export default async function deleteBooking(token:string, bookingId:string) {
    const response = await fetch(`https://campground-backend-kappa.vercel.app:443/api/v1/bookings/${bookingId}`,{
        method: "DELETE",
        headers:{
            "Content-Type":"application/json",
            authorization: `Bearer ${token}`
        },next:{tags:['bookings']}
    })

    if(!response.ok) throw new Error(`failed to delete booking ${response.status}`)
    return await response.json()
}