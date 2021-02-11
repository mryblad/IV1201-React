import './App.css';
import { Route} from "react-router-dom";
import {Header} from './Components/Header/Header';
import {Footer} from './Components/Footer/Footer';
import {Menu} from './Components/Menu/Menu';
import {Example} from './Components/Example/Example';
import {Login} from './Components/Login/Login';
import {CreateAccount} from './Components/CreateAccount/CreateAccount';
import {Apply} from './Components/Apply/Apply';
import {Authorized} from './Components/Authorized/Authorized';

const App=()=>
  <div className="App">
    <Authorized value={true}>
      <Header/>
      <div className="flexParent">
        <Menu/>
        <div className="mainContent">
            <Route path="/example" component={Example}/>
            <Route path="/create" component={CreateAccount}/>
            <Route path="/apply" component={Apply}/>
        </div>
      </div>
      <Footer/>
    </Authorized>
    <Authorized value={false}>
      <Login/>
    </Authorized>
  </div>;

export default App;
