import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Price: ₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;