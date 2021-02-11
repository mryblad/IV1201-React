import apiService from "./apiService";

class Authorizer {
  getToken(){
    let authorized = false;
    window.addEventListener("storage", ()=>{
      authorized = true;
      console.log("now authorized");
    })
    //check if token is valid
    let localToken = window.localStorage.getItem("authToken");
    if(localToken){
      console.log("checking token...");
      //check if token is valid with API
      if(true){
        return "faketoken"
      }
    }
    return authorized;
  }

}

const authorizer=new Authorizer();

export default authorizer;
