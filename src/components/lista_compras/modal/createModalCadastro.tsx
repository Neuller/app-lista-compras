import { useEffect, useState } from "react"
import { useListaComprasDataMutate } from "../hooks/useListaCompraMutate";
import { ListaComprasData } from "../interface/lista_compras_data";
import "./modal.css";

interface InputProps {
    label: string,
    value: any,
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return [
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    ]
}

export function CreateModal({ closeModal }: ModalProps) {
    const [descricao, setDescricao] = useState("");
    const [status, setStatus] = useState(true);
    const { mutate, isSuccess } = useListaComprasDataMutate();
    const submit = () => {
        const listaComprasData: ListaComprasData = {
            descricao,
            status
        }
        mutate(listaComprasData)
    }

    useEffect(() => {
        if (!isSuccess) return
        closeModal()
    }, [isSuccess]
    )

    return [
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo produto</h2>
                <form className="input-container">
                    <Input label="title" value={descricao} updateValue={setDescricao}></Input>
                </form>
                <button onClick={submit} className="">CADASTRAR</button>
            </div>
        </div >
    ]
}