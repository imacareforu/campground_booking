import Link from "next/link"
import CampgroundCard from "@/components/CampgroundCard"
import { CampgroundItem,CampgroundJson } from "../../interface"
import getCars from "@/libs/getCars"

export default async function CampgroundCatalog() {
    const campgroundJson = await getCars()

    return(
        <>
        Explore {campgroundJson.count} campground in our catalog
        <div className="flex flex-row flex-wrap justify-around m-6 p-6 bg-slate-100">
            {
                campgroundJson.data.map((item:CampgroundItem) => (
                    <Link href={`/camp/${item._id}`} key={`s${item._id}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 sm:p-4 md:p-4 lg:p-8">
                        <CampgroundCard campgroundName={item.name} imgSrc={item.picture}/>
                    </Link>
                ))
            } 
        </div>
        </>
    )
}