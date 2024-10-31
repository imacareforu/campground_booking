import CampgroundCatalog from "@/components/CampgroundCatalog";
import getCars from "@/libs/getCars";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default function Car() {
    const campgrounds = getCars()

    return(
        <main className='text-center p-5 bg-white'>
            <h1 className='text-x font-medium'>Select yout partner, Yeah</h1>
            <Suspense fallback={<p>Loading... <LinearProgress/></p>}>
                <CampgroundCatalog campgroundPromise={campgrounds}/>
            </Suspense>
        </main>
    );
}