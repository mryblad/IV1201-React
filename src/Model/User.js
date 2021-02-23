class User{
    constructor(type=null){
        this.subscribers=[];
        this.type=type;
    }

    addObserver(callback){
        this.subscribers=[...this.subscribers,callback];
        return ()=>this.removeObserver(callback);                                               
    }
    notifyObservers(){
        this.subscribers.forEach(callback=>callback());                                                          
    }
    removeObserver(obs){
        this.subscribers= this.subscribers.filter(o=>o!==obs); 
    }

    setType(type){
        this.type=type;
        this.notifyObservers();
    } 
}

const user=new User();

export default user;