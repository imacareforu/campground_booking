import InputAndLabel from "./InputAndLabel";
import Campground from "@/db/models/Campground";
import { dbConnect } from "@/db/dbConnect";
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default function CampgroundForm(){
    const addCampground = async (addCarForm:FormData) => {
        'use server'
        const name = addCarForm.get('name')
        const address = addCarForm.get('address')
        const district = addCarForm.get('district')
        const province = addCarForm.get('province')
        const postalcode = addCarForm.get('postalcode')
        const tel = addCarForm.get('tel')
        const picture = addCarForm.get('picture')

        try{
            await dbConnect()
            await Campground.create({
                'name' : name,
                'address' : address,
                'district' : district,
                'province' : province,
                'postalcode' : postalcode,
                'tel' : tel,
                'picture' : picture
            })
        }
        catch(error) {console.log(error)}

        revalidateTag('campground')
        redirect('/campground')
    }

    return(
        <form className="bg-sky-100 p-3 mx-2 rounded-lg" action={addCampground}>
            <div className="text-xl text-left text-blue-700">Create Campground</div>
            <InputAndLabel label="Name" placeHolder="Campground Name" id='name'/>
            <InputAndLabel label="Address" placeHolder="Campground Address" id='address'/>
            <InputAndLabel label="District" placeHolder="District" id="district"/>
            <InputAndLabel label="Province" placeHolder="Province" id="province"/>
            <InputAndLabel label="Postalcode" placeHolder="Postalcode (not exceed 5 digits)" id="postalcode"/>
            <InputAndLabel label="Tel" placeHolder="Telephone" id="tel"/>
            <InputAndLabel label="Picture" placeHolder="https://drive.google.com/uc?id=??????????????????????????" id='picture' />
            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white p-2 mb-5 rounded">Add New Campground</button>
        </form>
    )
}