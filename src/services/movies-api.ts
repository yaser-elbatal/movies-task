import { axiosAPI } from "@utils";
import { request } from "./ApiCentral";


export const movieListApi = () => {

    return request({
        url: `popular?api_key=${axiosAPI.key}&page=1`,
        method: "GET",
    }, '', true
    );

};


export const movieInfoApi = (id: number) => {

    return request({
        url: `${id}?api_key=${axiosAPI.key}`,
        method: "GET",
    }, '', true
    );

};



