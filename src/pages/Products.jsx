import { useState, useEffect } from "react";
import axios from "axios";
import CardProduct from "../components/CardProduct";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <h2 className="text-center">I NOSTRI PRODOTTI(COSTOSISSIMI)</h2>
      <div className="container">
        <div className="row">
          {products.map((prd) => {
            return (
              <div className="col-4 mb-4" key={prd.id}>
                <CardProduct prodotto={prd} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
