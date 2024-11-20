import Link from "next/link"
import CampgroundCard from "@/components/CampgroundCard"
import { CampgroundItem} from "../../interface"
import getCampgrounds from "@/libs/getCampgrounds"

export default async function CampgroundCatalog() {
    const campgroundJson = await getCampgrounds()

    return(
        <>
        Explore {campgroundJson.count} campground in our catalog
        <div className="flex flex-row flex-wrap justify-around m-6 p-6 bg-gray-100">
            {
                campgroundJson.data.map((item:CampgroundItem) => (
                    <Link href={`/campground/${item._id}`} key={`s${item._id}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 sm:p-4 md:p-4 lg:p-8">
                        <CampgroundCard campgroundName={item.name} imgSrc={item.picture}/>
                    </Link>
                ))
            } 
        </div>
        </>
    )
}