//should probably be an env variable.
//const BASE_URL = "https://iv1201-rest-server.herokuapp.com/";
const BASE_URL = "http://localhost:5000/"

/**
 * Class with methods used for API calls.
 */
class ApiService {
 /**
  * general method used for API calls, uses JSON format
  * @param {string} endpoint Specifies the endpoint
  * @param {string} method The method to use, for example GET or POST
  * @param {any} body The body of the request
  */
  apiCall(endpoint,method,body=null,token=null){
    let t = token!==null ? token : window.localStorage.getItem("authToken");
    return fetch(BASE_URL+endpoint,{
      "method":method,
      "headers":{
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + t
      },
      "body":body?JSON.stringify(body):null
    }).then(response=>response.json());
  }

  /**
   * Sends a request to the REST server to reset the user's password.
   * @param {string} email The email linked to the account.
   */
   resetPassword(email){
     return this.apiCall("forgotpassword/" + email, "GET");
   }

   /**
    * Updates the user's values in the database..
    * @param {object} body The object of key-value pairs to set in database.
    * @param {string} token The verification token received (can be null)
    */
   updatePerson({body, token}){
     return this.apiCall("person/", "PUT", body, token);
   }

   getEmptyFields(token=null){
     return this.apiCall("updateperson/", "GET", null, token);
   }

 /**
  * API call to check if the current authToken local storage is a valid token
  * @return {object} The resolved json fetch response
  */
  checkTokenValidity(){
    return this.apiCall("login/check_validity", "GET");
  }

 /**
  * API call to get a person from the database with a specific ID
  * @param {number} id The ID for a person
  * @return {object} The resolved json fetch response
  */
  getPersonById(id){
    return this.apiCall(`person/${id}`,"GET")
  }

 /**
  * sends data about a person that was used when creating an account
  * @param {any} body The body of the request
  * @return {object} The resolved json fetch response
  */
  registerAccount(body){
    return this.apiCall("person","POST",body);
  }

 /**
  * sends data used when logging in
  * @param {any} body The body of the request
  * @return {object} The resolved json fetch response
  */
  login(body){
    return this.apiCall("login","POST",body);
  }

  /**
  * gets an array of applications
  *
  * @return {object} The resolved json fetch response
  */
  getApplications(){
    return this.apiCall("application","GET");
  }

  /**
  * handles an application
  *
  * @return {object} The resolved json fetch response
  */
  handleApplication(id,body){
    return this.apiCall(`application/${id}`,"PUT",body);
  }

  getCompetences(){
    return this.apiCall("competence/list","GET");
  }

}

const apiService=new ApiService();

export default apiService;
