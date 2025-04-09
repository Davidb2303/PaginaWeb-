import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const Register = () => {
    return(
        <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-28  lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img src="src\components\images\Logo.png" alt="Icon" className="mx-auto h-16 w-auto"></img>
                <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Crear una cuenta
                </h2>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-4 md:space-y-6" method="POST">
                        <div>
                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                Nombre Completo
                            </label>
                            <input
                                type="text" 
                                name="name" 
                                id="name" 
                                className="block w-full rounded-md border border-gray-300 focus:ring-blue-600 focus:border-blue-600 p-2.5 bg-gray-100 text-black outline-1 -outline-offset-1 focus:outline-indigo-600 sm:text-sm/6" 
                                placeholder="" 
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                                Nombre de Usuario   
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="block w-full rounded-md border border-gray-300 focus:ring-blue-600 focus:border-blue-600 p-2.5 bg-gray-100 text-black outline-1 -outline-offset-1 focus:outline-indigo-600 sm:text-sm/6"
                                placeholder=""
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Correo
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="block w-full rounded-md border border-gray-300 focus:ring-blue-600 focus:border-blue-600 p-2.5 bg-gray-100 text-black outline-1 -outline-offset-1 focus:outline-indigo-600 sm:text-sm/6"
                                placeholder=""
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="block w-full rounded-md border border-gray-300 focus:ring-blue-600 focus:border-blue-600 p-2.5 bg-gray-100 text-black outline-1 -outline-offset-1 focus:outline-indigo-600 sm:text-sm/6"
                                placeholder=""
                                required
                            />
                        </div>
                        
                        <div>
                            <Button className="flex w-full text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2">
                                Crear cuenta
                            </Button>
                            <p className="mt-10 text-center text-sm/6 text-gray-500">
                                ¿Ya tienes una cuenta? 
                                <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Ingrese acá
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register;