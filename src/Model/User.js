class User{
    constructor(){
        this.token=null;
        this.observers=[];
    }

    addObserver(observer){
        this.observers=[...this.observers,observer];
    }

    notifyObservers(){
        this.observers.forEach(observer=>observer());
    }

    setToken(token){
        this.token=token;
        this.notifyObservers();
    }
}

const user=new User();
export {user};