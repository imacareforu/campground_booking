export default async function getCampgrounds() {
    await new Promise((resolve)=>setTimeout(resolve,1500))

    const response = await fetch("https://campground-backend-kappa.vercel.app:443/api/v1/campgrounds",{cache: 'no-cache'})
    if(!response.ok) throw new Error("failed to get campground list")
    return await response.json()
}