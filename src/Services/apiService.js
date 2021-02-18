
const BASE_URL = "https://iv1201-rest-server.herokuapp.com/";

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

  /**
   * Sends a request to the REST server to reset the user's password.
   * @param {[type]} email The email linked to the account.
   */
   resetPassword(email){
     return this.apiCall("forgotpassword/" + email, "GET");
   }

   /**
    * Sets a new password for the user's account based on email encapsulated in the token.
    * @param {[type]} password The new password to set
    * @param {[type]} token The verification token received
    */
   setPassword({password, token}){
     return this.apiCall("setpassword/", "POST", {"password": password, "token": token});
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

}

const apiService=new ApiService();

export default apiService;
