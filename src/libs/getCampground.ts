export default async function getCampground(id:string) {
    const response = await fetch(`https://campground-backend-kappa.vercel.app:443/api/v1/campgrounds/${id}`,
        {next:{tags:['campground']},
        cache: 'no-cache'}
        
    )
    
    if(!response.ok) throw new Error("fail to get campground")
    return await response.json()
}