import axios from "axios";
import AppConfig from "../../../AppConfig";
// import UtilService from '../UtilService/UtilService';

class HttpService {
    static initInterceptor = () => {
        axios.interceptors.request.use(config => config,
            error => Promise.reject(error));

        axios.interceptors.response.use(response => response, (error) => {
            if (error.response && error.response.status === 401) window.location.href = AppConfig.unauthorizedUrl;
            else return Promise.reject(error);
        });
    }

    static get = (url, config) => (config ? axios.get(url, config) : axios.get(url))

    static post = (url, data, config) => {
        if (!data) {
            throw new Error(`Error: Post data not provided for ${url}`);
        }
        return config ? axios.post(url, data, config) : axios.post(url, data);
    }

    static delete = (url, data, config = {}) => {
        if (!data) {
            throw new Error(`Error: Post data not provided for ${url}`);
        }
        return axios.delete(url, {
            data,
            ...config
        });
    }

    static upload = (url, file) => {
        const formData = new FormData();
        formData.append("file", file);
        return axios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(res => res.data);
    }
}

HttpService.initInterceptor();

export default HttpService;
