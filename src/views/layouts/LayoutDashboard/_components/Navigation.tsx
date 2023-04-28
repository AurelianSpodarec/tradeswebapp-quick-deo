import { Link } from "react-router-dom";
import { configApp } from "../../../../config/configApp";
import NavList from "./Nav/NavList";

function Navigation() {
    return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">

        <Link to="/dashboard" className="flex h-16 shrink-0 items-center"> 
            <img src="https://i.ibb.co/MMzrXqX/image.png" className="w-10" />
            <span className="ml-3 text-xl font-bold">{configApp.name}</span>
        </Link>

        <NavList />
        
    </div>
    </div>
    )
}

export default Navigation;