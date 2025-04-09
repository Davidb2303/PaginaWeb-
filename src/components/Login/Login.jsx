import React from "react";
import Button  from "../Button";
import { Link } from "react-router-dom";


const Login = () => {
    return(
        <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-28  lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img src="src\components\images\Logo.png" alt="Icon" className="mx-auto h-16 w-auto"></img>
                <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Iniciar Sesión
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Correo Electronico 
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md border border-gray-300 focus:ring-blue-600 focus:border-blue-600 p-2.5 bg-gray-100 text-black outline-1 -outline-offset-1 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Contraseña
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    ¿Olvido su contraseña?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md border border-gray-300 focus:ring-blue-600 focus:border-blue-600 p-2.5 bg-gray-100 text-black outline-1 -outline-offset-1 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <Button className="flex w-full text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2  ">Iniciar Sesión</Button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    No se ha registrado{' '}
                    <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Registrese acá
                    </Link>
                </p>

            </div>
        
        </div>
        </>
    )
}

export default Login;