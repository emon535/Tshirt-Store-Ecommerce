import APIService from "../APIService/APIService";

class DataService {
  constructor() {}

  getRequiredData() {
    return APIService.get(`https://backendapi.turing.com/products?page=1&limit=20&description_length=200`).then(
      response => {
        return response.data;
      }
    );
  }
}

export default DataService;
