import errorImg from "../../assets/404.png";
export default function PageError() {
  return (
    <div className="d-flex justify-content-center allign-content-center">
        <img src={errorImg} alt="Errore 404" />
    </div>
  );
}