import {SubmitHandler, useForm } from 'react-hook-form'

type FormFilds = {
    nome :string;
    sobrenome: string;
    email:string;
    telefone: string;
}

export default function FormComponent() {
    const { register, handleSubmit, formState:{errors, isSubmitting}, setError } = useForm<FormFilds>();
    const onSubmit: SubmitHandler<FormFilds> = async (data) => {
        try{
            await new Promise((resolve) => setTimeout(resolve,1000))
            console.log(data)
        }catch (error){
            setError("email",{
                message: "Esse email ja existe"
            })
        }
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
                <div className="flex flex-row col gap-x-4 my-4">
                    <input
                        {...register('nome',{
                            required:"Nome é obrigatorio",
                        })}
                        className="px-4 w-[250px] py-2 rounded-md"
                        placeholder="Nome"
                        />
                    <input 
                        {...register('sobrenome',{
                            required:"Sobrenome é obrigatorio",
                        })}
                        className="px-4 w-[250px] py-2 rounded-md"
                        placeholder="Sobrenome"
                        />
                </div>
                    <div className='flex gap-36'>
                        {errors.nome && (<div className='text-red-600'>{errors.nome.message}</div>)}
                        {errors.sobrenome && (<div className='text-red-600'>{errors.sobrenome.message}</div>)}
                    </div>
                <div className='flex flex-col gap-4'>
                    <input 
                        {...register('email',{
                            required: "Email é obrigatorio",
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message: "Email está invalido"
                            },
                        })}
                        className="px-4 w-full py-2 rounded-md"
                        placeholder="Email"
                        />
                    {errors.email && (<div className='text-red-600'>{errors.email.message}</div>)}
                    <input 
                        {...register('telefone',{
                            required: "Telefone é obrigatorio",
                            maxLength:{
                                value:12,
                                message: "digite no padrão 00-000000000"
                            },
                            minLength:{
                                value:12,
                                message: "digite no padrão 00-000000000"
                            },
                            pattern:{
                                value: /[0-9]-[0-9]/,
                                message: "digite no padrão 00-000000000"
                            },
                        })}
                        className="px-4 w-full py-2 rounded-md"
                        placeholder="Telefone"
                        />
                    {errors.telefone && (<div className='text-red-600'>{errors.telefone.message}</div>)}
                </div>
                <div className="flex flex-row my-4 gap-x-4 justify-end">
                    <button 
                        className="px-4 py-2 bg-sky-600 rounded-lg text-white"
                        type='submit'
                        disabled={isSubmitting}    
                        >{isSubmitting ? "Carregando..." : "Enviar"}</button>
                    <button className="px-4 py-2 bg-red-600 rounded-lg text-white">Cancelar</button>
                </div>
            </div>
        </form>
    )
}