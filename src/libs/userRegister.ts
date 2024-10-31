export default async function userRegister(name:string,tel:string,email:string,password:string) {
    const response = await fetch("https://campground-backend-kappa.vercel.app:443/api/v1/auth/register",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            tel: tel,
            role: "user",
            password: password,
            createdAt: "2024-10-27",
        })
    })

    if(!response.ok) throw new Error(`failed to register ${response.status}`)

    return await response.json()
}