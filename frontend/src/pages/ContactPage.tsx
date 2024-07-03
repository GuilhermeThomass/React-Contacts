import { useParams } from "react-router-dom"
import data from "../api/contacts.json";


export default function ContactPage() {
    const { id } = useParams();
    const contactId = Number(id)
    const contact = data[contactId-1]
    return(
        <div className="flex flex-row gap-4">
            <div>
                <img src="https://placehold.co/200" alt="placeholder"/>
            </div>
            <div>
                <p className="text-[2rem] text-blue-500">{contact.nome} {contact.sobrenome}</p>
                <p className="text-[2rem]">{contact.email}</p>
                <p className="text-[2rem]">{contact.telefone}</p>
                <button className="my-4 px-4 py-2 bg-red-600 rounded-lg text-white">deletar</button>
            </div>
        </div>
    )
}