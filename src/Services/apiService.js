
const BASE_URL = "https://iv1201-rest-server.herokuapp.com/";

class ApiService {

  getPersonById(id){
    return fetch(BASE_URL + "person/" + id).then(response => response.json());
  }

  registerAccount(body){
    return fetch(BASE_URL+"person",{
      "method":"POST",
      "headers":{
        'Content-Type': 'application/json'
      },
      "body":JSON.stringify(body)
    }).then(response=>response.json());
  }

  login(body){
    return fetch(BASE_URL+"login",{
      "method":"POST",
      "headers":{
        'Content-Type': 'application/json'
      },
      "body":JSON.stringify(body)
    }).then(response=>response.json());
  }

}

const apiService=new ApiService();

export default apiService;
