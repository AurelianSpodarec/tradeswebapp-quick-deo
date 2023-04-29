import { Link } from "react-router-dom";

function NavItem({ item, isActive }:any) {
    return (
        <li>
            <Link 
                to={`/dashboard${item.url}`} 
                className={`${isActive ? "bg-gray-50 text-indigo-600" : ""}  group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}>
                <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                </svg>
                {/* {item.name} */}
            </Link>
        </li>
    )
}

export default NavItem;