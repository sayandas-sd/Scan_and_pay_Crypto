
import { Link, useNavigate } from "react-router-dom";

export const Login = ({type}: {type: "signup" | "signin"})=>{
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/dashboard");
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div className="p-8 rounded-lg shadow-md bg-zinc-50">

                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        Create an account
                    </div>
                    <div className="text-slate-500 text-center">
                        {type === "signin"? "Don't have account" : "Already have an account?"}
                    <Link className="underline pl-2 " to = {type === "signin" ? "/signup" : "/signin"}>
                        {type === "signin" ? "Sign up":"Sign in"}
                    </Link>
                    </div>
                </div>

                <div className="pt-8">
                    <LabelInput label = "Username" id="email" placeholder="sayan@gmail.com" />

                   {type === "signup" && (
                    <div>
                    <LabelInput label = "Name" id="name" placeholder="Sayan Das" />
                    </div>    
                   )}

                    <LabelInput label = "Password" id="password" type={"password"} placeholder="password" />

                    <button onClick={handleClick} type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        {type === "signup" ? "Sign up" : "Sign in"}
                    </button>
                </div>

            </div>
        </div>
    </div>
}

interface Type {
    label: string;
    placeholder: string;
    type?: string;
    id: string;
}

function LabelInput({label, placeholder, type, id}: Type) {
    return <div>
        <div>
            <label className="block mb-2 text-sm text-gray-900 dark:text-bl font-semibold pt-4" >{label}</label>
            <input type={type || "text"} id={id} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder={placeholder} required />
        </div>
    </div>
}
