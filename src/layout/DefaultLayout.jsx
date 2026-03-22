import { Outlet } from "react-router-dom";
import Header from "../assets/Header";
import Footer from "../assets/Footer";
export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
