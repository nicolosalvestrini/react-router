import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Prodotti() {
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProdotti(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-center text-black">Prodotti</h2>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {prodotti.map((p) => (
          <div key={p.id} className="card" style={{ width: "18rem" }}>
            <img
              src={p.image}
              className="card-img-top p-3"
              alt={p.title}
              style={{ height: "200px", objectFit: "contain" }}
            />

            <div className="card-body">
              <h5 className="card-title">{p.title}</h5>

              <p className="card-text">{p.description.slice(0, 80)}...</p>

              <p className="card-text">
                <small>{p.category}</small>
              </p>

              <p className="card-text">💰 {p.price} €</p>

              <NavLink to={`/Prodotti/${p.id}`}>
                <button className="btn btn-secondary">Scopri di Più</button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
