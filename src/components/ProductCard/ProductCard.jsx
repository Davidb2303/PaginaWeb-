import React from 'react';

const ProductCard = ({ producto }) => (
  <div className="card">
    <h3>{producto.nombre}</h3>
    <p>Categoria: {producto.categoria}</p>
    <p>Color: {producto.color}</p>
    <p>Precio: ${producto.precio}</p>
  </div>
);

export default ProductCard;
