
const BASE_URL = "https://iv1201-rest-server.herokuapp.com/";

class ApiService {

  getPersonById(id){
    return fetch(BASE_URL + "person/" + id).then(e => e.json());
  }

}

const apiService=new ApiService();

export default apiService;
