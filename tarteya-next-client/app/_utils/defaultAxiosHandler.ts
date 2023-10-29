import Axios, { AxiosError, AxiosRequestConfig } from "axios";
import { ServerResponse } from "../_types/dtos";
import { API_PATH } from "../consts";
/**
 * Функция, оптимизирующая axios запросы и их обработку.
 * @param endPoint 
 * @param method 
 * @param data 
 * @param config 
 */
export function defaultAxiosHandler(endPoint: string, method: 'post' | 'get' | 'put', data: any, config: AxiosRequestConfig){

    switch(method){
        case "post":
            const post = Axios.post<ServerResponse>(`${API_PATH}${endPoint}`, data, config)
            .then((response) => {
                return response.data;
            }).catch((error: AxiosError<ServerResponse>) => {
                let e = error.response;
                if(e){
                    return e.data;
                }
            });
            return post;
        case "put":
            const put = Axios.put<ServerResponse>(`${API_PATH}${endPoint}`, data, config)
            .then((response) => {
                return response.data;
            }).catch((error: AxiosError<ServerResponse>) => {
                let e = error.response;
                if(e){
                    return e.data;
                }
            });
            return put;
        case "get":
            const get = Axios.put<ServerResponse>(`${API_PATH}${endPoint}`, data, config)
            .then((response) => {
                return response.data;
            }).catch((error: AxiosError<ServerResponse>) => {
                let e = error.response;
                if(e){
                    return e.data;
                }
            });
            return get;
        default:
            const defGet = Axios.put<ServerResponse>(`${API_PATH}${endPoint}`, data, config)
            .then((response) => {
                return response.data;
            }).catch((error: AxiosError<ServerResponse>) => {
                let e = error.response;
                if(e){
                    return e.data;
                }
            });
            return defGet;
    }
}