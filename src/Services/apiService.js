
const BASE_URL = "https://iv1201-rest-server.herokuapp.com/";

/*
  Class with methods used for API calls.
*/
class ApiService {
  /*
    general method used for API calls, uses JSON format

    @param {string} endpoint Specifies the endpoint
    @param {string} method The method to use, for example GET or POST
    @param {any} body The body of the request
  */
  apiCall(endpoint,method,body=null){
    return fetch(BASE_URL+endpoint,{
      "method":method,
      "headers":{
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + window.localStorage.getItem("authToken")
      },
      "body":body?JSON.stringify(body):null
    }).then(response=>response.json());
  }

  /*
    API call to get a person from the database with a specific ID

    @param {number} id The ID for a person
  */
  getPersonById(id){
    return this.apiCall(`person/${id}`,"GET")
  }

  /*
    sends data about a person that was used when creating an account

    @param {any} body The body of the request
  */
  registerAccount(body){
    return this.apiCall("person","POST",body);
  }

  /*
    sends data used when logging in

    @param {any} body The body of the request
  */
  login(body){
    return this.apiCall("login","POST",body);
  }

}

const apiService=new ApiService();

export default apiService;
