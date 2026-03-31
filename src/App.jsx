import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/prodotti/Prodotti";
import SingoloProdotto from "./pages/prodotti/SingoloProdotto";
import PageError from "./pages/PageError/PageError";
import { BudgetProvider } from "./Context/BudgetContext";

function App() {
  return (
    <>
      <BudgetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/ChiSiamo" element={<ChiSiamo />} />
              <Route path="/Prodotti" element={<Prodotti />} />
              <Route path="/Prodotti/:id" element={<SingoloProdotto />} />
            </Route>

            <Route path="/Pageerror" element={<PageError />} />
          </Routes>
        </BrowserRouter>
      </BudgetProvider>
    </>
  );
}

export default App;
