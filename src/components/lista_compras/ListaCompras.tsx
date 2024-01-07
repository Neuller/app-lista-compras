interface ListaComprasProps {
    descricao: string,
    status: boolean
}

export function ListaCompras({ descricao, status }: ListaComprasProps) {
    let statusFormat = status == true ? "EM FALTA" : "NÃO PRECISA COMPRAR";

    return (
        <div className="listaCompras">
            <h2>{descricao}</h2>
            <p>Status: {statusFormat} </p>
        </div>
    )
}