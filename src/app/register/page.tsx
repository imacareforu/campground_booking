import UserDateil from "@/components/UserDetail";
import RegisterForm from "@/components/RegisterForm";

export default function Register() {

    return(
        <div className="flex flex-row w-full">
            <RegisterForm/>
            <UserDateil/>
        </div>
    )
}