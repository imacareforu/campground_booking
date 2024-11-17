export default async function makeCampground(token:string, name:string, address:string, district:string, province:string, postalcode:string, tel:string, picture:string) {
    const response = await fetch(`https://campground-backend-kappa.vercel.app:443/api/v1/campgrounds`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            authorization: `Bearer ${token}`
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

    if(!response.ok) throw new Error(`failed to make campground ${response.status}`)
    return await response.json()
}