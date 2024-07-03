import FormComponent from "../components/FormContact"

export default function NewContactPage() {
    return(
        <div className="gap-4 flex flex-col items-center justify-center">
            <h1 className="text-[3rem]">Novo Contato</h1>
            <FormComponent/>
        </div>
    )
}