export default async function getCampgrounds() {
    await new Promise((resolve)=>setTimeout(resolve,1500))

    const response = await fetch("https://campground-backend-kappa.vercel.app:443/api/v1/campgrounds")
    if(!response.ok) throw new Error("failed to get campground list")
    const data = await response.json()
    console.log(data)
    return data
}