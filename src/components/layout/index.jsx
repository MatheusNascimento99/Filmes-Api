import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Header from "../header";


function Layout() {
    return (
        <>
            <Navbar />
            <Header />
            <Outlet />
        </>
    )
}

export default Layout;