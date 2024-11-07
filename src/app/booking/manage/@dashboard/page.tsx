import { authOption } from "@/app/api/auth/[...nextauth]/AuthOption"
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"

export default async function DashboardPage() {

    const session = await getServerSession(authOption)
    
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    return(
        <main className='bg-slate-100 m-2 p-2 rounded'>
            <div className="text-left text-2xl px-2 font-semibold">{profile.data.name}</div>
            <table className="table-auto text-left font-extralight m-2">
                <tbody>
                    <tr>
                        <td className="min-w-[150px]">Email</td>
                        <td>{profile.data.email}</td>
                    </tr>
                    <tr>
                        <td>Tel.</td>
                        <td>{profile.data.tel}</td>
                    </tr>
                    <tr>
                        <td>Member Since</td>
                        <td>{createdAt.toString()}</td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}