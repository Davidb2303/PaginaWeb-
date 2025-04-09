import Button from "../Button";
import { Link } from "react-router-dom";
import React, {useState} from "react";
import { registerUser } from "../../api/auth";


const Register = () => {
        const [form, setForm] = useState({
          name: "",
          username: "",
          email: "",
          password: "",
        });
      
        const handleChange = (e) =>
          setForm({ ...form, [e.target.name]: e.target.value });
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            await registerUser(form);
            alert("Cuenta creada con éxito. Ahora inicia sesión.");
          } catch (error) {
            console.error("Error al registrar", error.response.data);
            alert(error.response.data.msg || "Error al registrar");
          }
        };
    return(
        
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-28  lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img src="src\components\images\Logo.png" alt="Icon" className="mx-auto h-16 w-auto"></img>
                <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Crear una cuenta
                </h2>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-4 md:space-y-6" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                Nombre Completo
                            </label>
                            <input
                                type="text" 
                                name="name" 
                                id="name"
                                value={form.name}
                                onChange={handleChange} 
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
                                value={form.username}
                                onChange={handleChange}
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
                                value={form.email}
                                onChange={handleChange}
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
                                value={form.password}
                                onChange={handleChange}
                                className="block w-full rounded-md border border-gray-300 focus:ring-blue-600 focus:border-blue-600 p-2.5 bg-gray-100 text-black outline-1 -outline-offset-1 focus:outline-indigo-600 sm:text-sm/6"
                                placeholder=""
                                required
                            />
                        </div>
                        
                        <div>
                            <Button type="submit "className="flex w-full text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2">
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
        
    )
}

export default Register;