export default async function getCar(id:string) {
    const response = await fetch(`https://campground-backend-kappa.vercel.app:443/api/v1/campgrounds/${id}`,{next:{tags:['cars']}})
    
    if(!response.ok) throw new Error("fail")
    return await response.json()
}