import CampgroundCatalog from "@/components/CampgroundCatalog";

export default async function Car() {

    return(
        <main className='text-center p-5 bg-white'>
            <p className='text-5xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 font-bold'>Choose Your Outdoor Adventure</p>
            <CampgroundCatalog/>
        </main>
    );
}