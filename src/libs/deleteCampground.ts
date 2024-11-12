export default async function deleteCampground(token:string, campgroundId:string) {
    const response = await fetch(`https://campground-backend-kappa.vercel.app:443/api/v1/campgrounds/${campgroundId}`,{
        method: "DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    })

    if(!response.ok) throw new Error(`failed to delete campground ${response.status}`)
    return await response.json()
}