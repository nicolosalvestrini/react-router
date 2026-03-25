import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="d-flex justify-content-center py-3">
                <h1>React Router</h1>
            </header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-center gap-3">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/ChiSiamo" className="nav-link">Chi Siamo</NavLink>
                <NavLink to="/Prodotti" className="nav-link">Prodotti</NavLink>
            </nav>
        </>
    );
}