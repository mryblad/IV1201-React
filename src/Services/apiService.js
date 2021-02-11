
const BASE_URL = "https://iv1201-rest-server.herokuapp.com/";

class ApiService {

  apiCall(endpoint,method,body=null){
    return fetch(BASE_URL+endpoint,{
      "method":method,
      "headers":{
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + window.localStorage.getItem("authToken")
      },
      "body":body?JSON.stringify(body):null
    }).then(response => response.json()).then(r => {
      if(r.error && r.error.includes("Unauthorized")){
        console.log("redirecting to login...");
        window.location.pathname = "/login";
      }
      return r;
    });
  }

  getPersonById(id){
    return this.apiCall(`person/${id}`,"GET")
  }

  registerAccount(body){
    return this.apiCall("person","POST",body);
  }

  login(body){
    return this.apiCall("login","POST",body);
  }

}

const apiService=new ApiService();

export default apiService;
