import axios, { AxiosPromise } from "axios";
import { ListaComprasData } from "../components/interface/lista-compras-data";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<ListaComprasData[]> => {
    const response = axios.get(API_URL + "/lista_compras");
    return response;
}
export function useListaComprasData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ["lista-compras-data"],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}