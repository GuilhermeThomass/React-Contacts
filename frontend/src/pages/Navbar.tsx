import { Outlet } from "react-router-dom"

import NavBarComponent from "../components/NavBarComponent";

export default function NavBar() {
    return(
        <div className="flex">
            <NavBarComponent/>
            <div className="mx-12 my-9">
                <Outlet/>
            </div>
        </div>
    )
}