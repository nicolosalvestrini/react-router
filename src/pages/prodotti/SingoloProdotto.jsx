import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SingoloProdotto() {
  const [prodotto, setProdotto] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProdotto(res.data);
      })
      .catch(() => {
        navigate("/Pageerror");
      });
  }, [id, navigate]);
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      <div key={prodotto.id} className="card" style={{ width: "18rem" }}>
        <img
          src={prodotto.image}
          className="card-img-top p-3"
          alt={prodotto.title}
          style={{ height: "200px", objectFit: "contain" }}
        />

        <div className="card-body">
          <h5 className="card-title">{prodotto.title}</h5>

          <p className="card-text">{prodotto.description}</p>

          <p className="card-text">
            <small>{prodotto.category}</small>
          </p>

          <p className="card-text">💰 {prodotto.price} €</p>
          <div className="d-flex justify-content-beetween">
            {Number(id) > 1 && (
              <button
                className="btn btn-secondary me-2"
                onClick={() => navigate(`/Prodotti/${Number(id) - 1}`)}
              >
                Prodotto Precedente
              </button>
            )}
              <button
                className="btn btn-secondary"
                onClick={() => navigate(`/Prodotti/${Number(id) + 1}`)}
              >
                Prossimo Prodotto
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
