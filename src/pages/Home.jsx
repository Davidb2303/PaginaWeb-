import React, { useEffect, useState } from 'react';
import { getProductos, getRecomendaciones } from '../api/auth';
import ProductCard from '../components/ProductCard/ProductCard';

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [recomendacion, setRecomendacion] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProductos();
      setProductos(res.data);

      if (res.data.length > 0) {
        const categoria = res.data[0].categoria;
        const reco = await getRecomendaciones(categoria);
        setRecomendacion(reco.data.recomendacion);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <div className="grid">
        {productos.map((p) => (
          <ProductCard key={p.id} producto={p} />
        ))}
      </div>
      <hr />
      <h2>🧠 Recomendación de la IA</h2>
      <p>{recomendacion || 'Cargando...'}</p>
    </div>
  );
};

export default Home;
