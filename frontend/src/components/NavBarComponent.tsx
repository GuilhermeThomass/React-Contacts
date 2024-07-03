import { NavLink } from "react-router-dom";
import data from "../api/contacts.json";

export default function NavBarComponent() {
    return(
        <div className="flex flex-col gap-4 text-[1.5rem] px-6 py-3 bg-zinc-800 h-screen">
            <div className="flex gap-4">
                <input
                    className="px-4 w-[250px] py-2 rounded-xl"
                    placeholder="Search"
                    type="search"
                />
                <NavLink to="/contact/new" className="px-4 py-2 bg-zinc-900 rounded-lg text-white">New</NavLink>
            </div>
            <div className="flex flex-col gap-2 px-2">
                {data.map((contact,index)=>(
                    <NavLink 
                        key={contact.nome}
                        to={`/contact/${index+1}`} 
                        className={({isActive})=>{
                            return isActive ? 'text-blue-500' : ' text-white';
                        }}>
                            {contact.nome}
                        </NavLink>
                ))}
            </div>
        </div>
    )
}