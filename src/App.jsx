import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/ChiSiamo" element={<ChiSiamo />} />
            <Route path="/Prodotti" element={<Prodotti />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
