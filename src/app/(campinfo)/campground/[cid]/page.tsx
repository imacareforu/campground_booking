import getCampground from "@/libs/getCampground"
import { getServerSession } from "next-auth"
import { authOption } from "@/app/api/auth/[...nextauth]/AuthOption"
import getUserProfile from "@/libs/getUserProfile"
import CampgroundDetail from "@/components/CampgroundDetail"

export default async function CarDetailPage({ params }: { params: { cid: string } }) {
    const campgroundDetail = await getCampground(params.cid)
    const session = await getServerSession(authOption)

    if (!session || !session.user.token) return (
        <CampgroundDetail cid={params.cid} campgroundDetail={campgroundDetail.data} admin={false} token=''/>
    )

    const profile = await getUserProfile(session.user.token)

    return (
        <CampgroundDetail cid={params.cid} campgroundDetail={campgroundDetail.data} admin={profile.data.role=='admin'} token={session.user.token}/>
    )
}