export default async function getBookings() {
    await new Promise((resolve)=>setTimeout(resolve,1000))

    const response = await fetch(`https://campground-backend-kappa.vercel.app:443/api/v1/bookings`)
    if(!response.ok) throw new Error("failed")
    return await response.json()
}