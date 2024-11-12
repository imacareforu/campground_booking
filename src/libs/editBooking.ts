export default async function editBooking(token:string, bookingId:string, bookingDate:Date, checkoutDate:Date) {
    const response = await fetch(`https://campground-backend-kappa.vercel.app:443/api/v1/bookings/${bookingId}`,{
        method: "PUT",
        headers:{
            "Content-Type":"application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            bookingDate: bookingDate,
            checkoutDate: checkoutDate,
        })
    })

    if(!response.ok) throw new Error(`failed to edit booking ${response.status}`)
    return await response.json()
}