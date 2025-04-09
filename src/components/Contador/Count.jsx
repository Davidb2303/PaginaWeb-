import { useState, useEffect } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!sessionStorage.getItem("visited")) {
      const storedCount = localStorage.getItem("visitorCount");
      const newCount = storedCount ? parseInt(storedCount) + 1 : 1;
      
      localStorage.setItem("visitorCount", newCount);
      sessionStorage.setItem("visited", "true"); 
      
      setCount(newCount);
    } else {
      setCount(localStorage.getItem("visitorCount") || 1);
    }
  }, []);

  return (
    <div className="text-gray-300">
      <p className="text-lg mt-2">Número de visitas: {count}</p>
    </div>
  );
}
