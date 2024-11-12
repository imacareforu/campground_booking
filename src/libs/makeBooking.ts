export default async function makeBooking(token:string|undefined,bookingDate:Date, checkoutDate:Date, user:string|undefined, campground:string|null) {
    const response = await fetch(`https://campground-backend-kappa.vercel.app:443/api/v1/campgrounds/${campground}/bookings`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            bookingDate: bookingDate,
            checkoutDate: checkoutDate,
            user: user,
            campground: campground
        })
    })

    if(!response.ok) throw new Error(`failed to booking ${response.status}`)

    return await response.json()
}