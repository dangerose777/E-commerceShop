import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";
import "../App.css";

function MainPage() {
  const API_URL = import.meta.env.VITE_API_URL;
  //const API_URL_noEnv = "http://localhost:8080";
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error while getting products:", err))
  }, [API_URL]);

  return (
    <>
    {/* <div className="baner">

    </div> */}

    <div className="products_container">
      {products.map((product) => (
        <div className="product_card" key={product.id}>
          <div className="card" onClick={() => navigate(`/product/${product.id}`)}>
            <img src={product.image} alt={product.name} />
            <h3 className="product_name">{product.name}</h3>
            <p className="product_price">{product.price.toFixed(2)} $</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default MainPage;