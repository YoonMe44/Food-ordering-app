import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/elements/Button";
import { app } from "../../firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Register  = () =>{
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    
    return(
        <div className="h-screen flex background-black justify-center">
            <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 transition duration-300 animate-pink blur gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
                    <div className="z-10 w-full h-full p-10 rounded-xl bg-black">
                        <h5 className="text-3xl font-bold text-white">Register</h5>
                        <form action="" className="w-full space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-lg font-medium text-gray-200">Name</label>
                                <input {...register("name", { required: true })} type="text" className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                            </div>
                        </form>
                </div>
            </div>
        </div>
    )
}
export default Register;