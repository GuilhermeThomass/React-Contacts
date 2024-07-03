import { useParams } from "react-router-dom"
import data from "../api/contacts.json";


export default function ContactPage() {
    const { id } = useParams();
    const contactId = Number(id)
    const contact = data[contactId-1]
    return(
        <>
            <p>{contact.nome}</p>
            <p>{contact.sobrenome}</p>
            <p>{contact.email}</p>
            <p>{contact.telefone}</p>
        </>
    )
}