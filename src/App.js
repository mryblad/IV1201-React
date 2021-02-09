import './App.css';
import { Route, Link, BrowserRouter } from "react-router-dom";
import {Header} from './Components/Header/Header';
import {Footer} from './Components/Footer/Footer';
import {Menu} from './Components/Menu/Menu';
import {Example} from './Components/Example/Example'
import {Login} from './Components/Login/Login'

const App=()=>
  <div className="App">
    <Header/>
    <div className="flexParent">
      <Menu/>
      <div className="mainContent">
        <BrowserRouter>
          <Route path="/example" component={Example}/>
          <Route path="/login" component={Login}/>
        </BrowserRouter>
      </div>
    </div>
    <Footer/>
  </div>;

export default App;
