
const BASE_URL = "https://iv1201-rest-server.herokuapp.com/";

class apiService {

  static async getPersonById(id){
    return await fetch(BASE_URL + "person/" + id).then(e => e.json());
  }

}

export default apiService;
