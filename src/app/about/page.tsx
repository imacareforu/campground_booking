import UserDateil from "@/components/UserDetail";
import UploadButton from "@/components/UploadButton";

export default function About() {

    return(
        <main>
            <div className="m-5 text-center font-bold text-4xl">About Us</div>
            <div className="m-8 text-lg">
                <p className="font-semibold">Goman Amanai</p>
                <ul className="px-6">
                    <li>1. Winithra Manolertthewan</li>
                    <li>2. Panupong Nantasung</li>
                </ul>
            </div>
        </main>
    );
}