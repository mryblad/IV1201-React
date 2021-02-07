
const BASE_URL = "https://iv1201-rest-server.herokuapp.com/";

class ApiService {

  async getPersonById(id){
    return await fetch(BASE_URL + "person/" + id).then(e => e.json());
  }

}

const apiService=new ApiService();

export default apiService;
