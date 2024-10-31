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

    const addCar = async (addCarForm:FormData) => {
        'use server'
        const name = addCarForm.get('name')
        const desc = addCarForm.get('address')
        const pic = addCarForm.get('picture')
        const seats = addCarForm.get('seats')
        const doors = addCarForm.get('doors')
        const largebags = addCarForm.get('largebags')
        const smallbags = addCarForm.get('smallbags')
        const automatic = addCarForm.get('automatic')
        const dayRate = addCarForm.get('dayRate')

        try{
            await dbConnect()
            await Campground.create({
                'model':model,
                'description':desc,
                'picture':pic,
                'seats':seats,
                'doors':doors,
                'largebags':largebags,
                'smallbags':smallbags,
                'automatic': automatic? true:false,
                'dayRate':dayRate
            })
        }
        catch(error) {console.log(error)}

        revalidateTag('cars')
        redirect('/car')
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
        <form className="bg-sky-100 p-3 rounded-lg" action={addCar} >
            <div className="text-xl text-left text-blue-700">Create Car Model</div>
            <InputAndLabel label="Model" placeHolder="Car Model" id='model' />
            <InputAndLabel label="Description" placeHolder="Car Description" id='desc' />
            <InputAndLabel label="Picture" placeHolder="URL" id='picture' />
            <div className="flex items-center w-full my-2 px-3">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="seats">Seats</label>
                <input type='number' required id='seats' name='seats' placeholder="4" min={0} max={50}
                    className="bg-white border-2 border-gray-200 rounded-md w-auto p-2 text-gray-700 focus:border-blue-400 focus:outline-none" />
                <label className="w-auto block text-gray-700 pr-4 ml-4" htmlFor="doors">Doors</label>
                <input type='number' required id='doors' name='doors' placeholder="4" min={0} max={8}
                    className="bg-white border-2 border-gray-200 rounded-md w-auto p-2 text-gray-700 focus:border-blue-400 focus:outline-none" />
                <input type='checkbox' name='automatic' id='automatic' className="mx-3" />
                <label>Auto</label>
            </div>
            <div className="flex items-center w-full my-2 px-3">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="largebags">Large Bags</label>
                <input type='number' required id='largebags' name='largebags' placeholder="4" min={0} max={10}
                    className="bg-white border-2 border-gray-200 rounded-md w-auto p-2 text-gray-700 focus:border-blue-400 focus:outline-none" />
                <label className="w-auto block text-gray-700 pr-4 ml-4" htmlFor="smallbags">Small Bags</label>
                <input type='number' required id='smallbags' name='smallbags' placeholder="4" min={0} max={10}
                    className="bg-white border-2 border-gray-200 rounded-md w-auto p-2 text-gray-700 focus:border-blue-400 focus:outline-none" />
            </div>
            <InputAndLabel label='Rate' placeHolder="Daily Rate (including insurance" id='dayRate' />
            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white p-2 mb-5 rounded">Add New Car</button>
        </form>
    )
}