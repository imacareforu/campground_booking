import { authOption } from "@/app/api/auth/[...nextauth]/AuthOption";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";

export default async function UserDetail() {
    const session = await getServerSession(authOption)

    if (!session) {
        return (
            <div className='flex flex-col m-1 text-left p-2 bg-sky-100'>
                <p className='m-3'>try sign-in to see changes</p>
                <table>
                    <tbody>
                        <tr><td className='w-32'>email :</td><td>admin1@campground.com</td></tr>
                        <tr><td>password :</td><td>adminadmin</td></tr>
                    </tbody>
                </table>
                <p className='m-3 mt-5'>or</p>
                <table>
                    <tbody>
                        <tr><td className='w-32'>email :</td><td>user2@campground.com</td></tr>
                        <tr><td>password :</td><td>useruser</td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
    else {
        const profile = await getUserProfile(session.user.token)
        const createdAt = new Date(profile.data.createdAt)

        return (
            <table className='flex flex-col m-5'>
                <tbody>
                    <tr>
                        <td className='min-w-36 font-semibold'>Name</td>
                        <td>{profile.data.name}</td>
                    </tr>
                    <tr><td className='font-semibold'>Email</td><td>{profile.data.email}</td></tr>
                    <tr><td className='font-semibold'>Tel.</td><td>{profile.data.tel}</td></tr>
                    <tr><td className='font-semibold'>Member Since</td><td>{createdAt.toString()}</td></tr>
                </tbody>
            </table>
        )
    }
}