/**
 * A class that stores client specific data such as whether or not the user is a recruiter or applicant, or whether or not the User has
 * empty fields in the database to fill in.
 */
class User{
    constructor(type=null,emptyFields=null){
        this.subscribers=[];
        this.type=type;
        this.emptyFields=emptyFields;
    }

    /**
     * Adds an observer to be called back when the User data has been updated.
     * @param {function} callback 
     */
    addObserver(callback){
        this.subscribers=[...this.subscribers,callback];
        return ()=>this.removeObserver(callback);                                               
    }
    /**
     * Notifies observers that the User data has been updated.
     */
    notifyObservers(){
        this.subscribers.forEach(callback=>callback());                                                          
    }
    /**
     * Removes an observer. Used for cleanup.
     * @param {function} obs 
     */
    removeObserver(obs){
        this.subscribers= this.subscribers.filter(o=>o!==obs); 
    }

    /**
     * Sets the User's type and notifies observers.
     * @param {String} type 
     */
    setType(type){
        this.type=type;
        this.notifyObservers();
    }

    /**
     * Sets the User's empty fields and notifies observers.
     * @param {Object} emptyFields 
     */
    setEmptyFields(emptyFields){
        this.emptyFields=emptyFields;
        this.notifyObservers();
    }

    /**
     * Reverts to initial state.
     */
    reset(){
        this.subscribers=[];
        this.type=null;
        this.emptyFields=null;
    }
}

const user=new User();

export default user;