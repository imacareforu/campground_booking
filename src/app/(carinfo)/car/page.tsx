import CampgroundCatalog from "@/components/CampgroundCatalog";
import getCars from "@/libs/getCars";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default function Car() {
    const campgrounds = getCars()

    return(
        <main className='text-center p-5 bg-white'>
            <p className='text-[60px] font-bold font-sans'>Choose Your Outdoor Adventure</p>
            <Suspense fallback={<p>Loading... <LinearProgress/></p>}>
                <CampgroundCatalog campgroundPromise={campgrounds}/>
            </Suspense>
        </main>
    );
}