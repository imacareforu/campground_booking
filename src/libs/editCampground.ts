export default async function editCampground(
    token:string, campgroundId:string, name:string, address:string, district:string, province:string, postalcode:string, tel:string, picture:string) {
    const response = await fetch(`https://campground-backend-kappa.vercel.app:443/api/v1/campgrounds/${campgroundId}`,{
        method: "PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name: name,
            address : address,
            district: district,
            province: province,
            postalcode: postalcode,
            tel: tel,
            picture: picture
        })
    })

    if(!response.ok) throw new Error(`failed to edit campground ${response.status}`)
    return await response.json()
}