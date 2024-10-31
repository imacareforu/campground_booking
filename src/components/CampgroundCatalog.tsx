import Link from "next/link"
import CampgroundCard from "@/components/CampgroundCard"
import { CampgroundItem,CampgroundJson } from "../../interface"

export default async function CampgroundCatalog({campgroundPromise}:{campgroundPromise:Promise<CarJson>}) {
    const campgroundJson = await campgroundPromise

    return(
        <>
        Explore {campgroundJson.count} campground in our catalog
        <div className="flex flex-row flex-wrap justify-around m-6 p-6">
            {
                campgroundJson.data.map((item:CampgroundItem) => (
                    <Link href={`/car/${item._id}`} key={`s${item._id}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 sm:p-4 md:p-4 lg:p-8">
                        <CampgroundCard campgroundName={item.campground} imgSrc={item.picture}/>
                    </Link>
                ))
            } 
        </div>
        </>
    )
}