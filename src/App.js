import './App.css';
import { Route, Link, BrowserRouter } from "react-router-dom";
import {Header} from './Components/Header/Header';
import {Footer} from './Components/Footer/Footer';
import {Menu} from './Components/Menu/Menu';
import {Example} from './Components/Example/Example'
import {Login} from './Components/Login/Login'
import {CreateAccount} from './Components/CreateAccount/CreateAccount'
import {Apply} from './Components/Apply/Apply'

const App=()=>
  <div className="App">
    <Header/>
    <div className="flexParent">
      <Menu/>
      <div className="mainContent">
        <BrowserRouter>
          <Route path="/example" component={Example}/>
          <Route path="/login" component={Login}/>
          <Route path="/create" component={CreateAccount}/>
          <Route path="/apply" component={Apply}/>
        </BrowserRouter>
      </div>
    </div>
    <Footer/>
  </div>;

export default App;
