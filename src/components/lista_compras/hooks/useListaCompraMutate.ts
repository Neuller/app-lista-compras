import axios, { AxiosPromise } from "axios";
import { ListaComprasData } from "../interface/lista_compras_data";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const postData = async (data: ListaComprasData): AxiosPromise<any> => {
    const response = axios.post(API_URL + "/lista_compras", data);
    return response;
}
export function useListaComprasDataMutate() {
    const queryCliente = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryCliente.invalidateQueries(["lista-compras-data"])
        }
    })

    return mutate
}