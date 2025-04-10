import React from "react";
import { useEffect, useState } from "react";
import {getProductsByCategory} from "../../api/auth";
import { useParams } from "react-router-dom";

const Categories = () => {
    const {nombre} = useParams();
    const[productos, setProductos] = useState([]);

    useEffect(()=>{
        getProductsByCategory(nombre)
        .then(res => setProductos(res.data))
        .catch(err => console.error(err));
    }, [nombre])

    return(
        <div className="p-4">
            <h1 className="text-2x1 font-bold mb-4">Categoria: {nombre} </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {productos.map( prod => (
                    <div key={prod.id} className="border p-4 rounded shadow">
                        <img src={prod.imageUrl} alt={prod.name} className="w-full h-40 object-cover mb-2"/>
                        <h2 className="text-xl font-semibold">{prod.name}</h2>
                        <p>${prod.price}</p>
                        <p className="text-sm text-gray-500"></p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Categories;