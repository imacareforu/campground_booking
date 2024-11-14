import { authOption } from "@/app/api/auth/[...nextauth]/AuthOption"
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import InputAndLabel from "@/components/InputAndLabel"
import InputFileUpload from "@/components/UploadButton"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import { dbConnect } from "@/db/dbConnect"
import Campground from "@/db/models/Campground"

export default async function ManagePage() {

    const addCampground = async (addCampGroundForm:FormData) => {
        'use server'
        const name = addCampGroundForm.get('name')
        const address = addCampGroundForm.get('address')
        const district = addCampGroundForm.get('district')
        const province = addCampGroundForm.get('province')
        const postalcode = addCampGroundForm.get('postalcode')
        const tel = addCampGroundForm.get('tel')
        const picture = addCampGroundForm.get('picture')

        try{
            await dbConnect()
            await Campground.create({
                "name": name,
                "address": address,
                "district":district,
                "province": province,
                "postalcode": postalcode,
                "tel": tel,
                "picture": picture
            })
        }
        catch(error) {console.log(error)}

        revalidateTag('campground')
        redirect('/camp')
    }

    const session = await getServerSession(authOption)

    if (!session || !session.user.token) return (
        <main className='bg-red-100 mx-2 rounded'>
            <div>try sign in with info@primerental.com to see changes</div>
        </main>
    )

    const profile = await getUserProfile(session.user.token)

    if (profile.data.role != 'admin') return (
        <main className='bg-red-100 mx-2 rounded'>
            <div>try sign in with info@primerental.com to access </div>
        </main>
    )


    return (
        <form className="bg-sky-100 p-3 rounded-lg" action={addCampground} >
            <div className="text-xl text-left text-blue-700">Create Campground</div>
            <InputAndLabel label="Name" placeHolder="Campground Name" id='name' />
            <InputAndLabel label="Address" placeHolder="Campground Address" id='address' />
            <InputAndLabel label="District" placeHolder="District" id='district' />
            <InputAndLabel label="Province" placeHolder="Province" id='province'/>
            <InputAndLabel label="Postal Code" placeHolder="Postal Code" id='postalcode'/>
            <InputAndLabel label='Tel' placeHolder="Tel" id='tel' />
            <InputAndLabel label="Picture" placeHolder="Picture" id='picture' />
            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white p-2 mb-5 rounded">Add New Campground</button>
        </form>
    )
}