import axios from "axios";
import AppConfig from "../../AppConfig";

class APIService {
  static initInterceptor = () => {
    axios.interceptors.request.use(
      function (config) {
        // if (config.url.indexOf('api') > -1) {
        //     config.url = UtilService.getApiUrl(config.url, UtilService.getHostName());
        // }

        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response && error.response.status === 401)
          window.location.href = AppConfig.unauthorizedUrl;
        else return Promise.reject(error);
      }
    );
  };

  static get = (url, config) => {
    return config ? axios.get(url, config) : axios.get(url);
  };

  static post = (url, data, config) => {
    if (!data) {
      throw new Error("Error: Post data not provided for " + url);
    }
    return config ? axios.post(url, data, config) : axios.post(url, data);
  };
}

APIService.initInterceptor();

export default APIService;
