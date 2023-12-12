import { NavLink } from "react-router-dom";


function Navbar (){
    return (
        <nav className="nav justify-content-center p-2 bg-dark nav-underline">
            <NavLink className="nav-link text-white" to="/">Home</NavLink>
            <NavLink className="nav-link text-white" to="/action">Ação</NavLink>
        </nav>
    )
}
export default Navbar;