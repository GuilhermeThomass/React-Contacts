import FormComponent from "../components/FormContact"

export default function NewContactPage() {
    return(
        <div className="gap-4">
            <div className="flex flex-col gap-4">
                <h1 className="text-[3rem]">Novo Contato</h1>
            </div>
            <FormComponent/>
        </div>
    )
}