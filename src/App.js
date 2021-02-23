import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import {Header} from './Components/Header/Header';
import {Footer} from './Components/Footer/Footer';
import {Menu} from './Components/Menu/Menu';
import {Example} from './Components/Example/Example';
import {Login} from './Components/Login/Login';
import {ForgotPassword} from './Components/ForgotPassword/ForgotPassword';
import {UpdatePerson} from './Components/UpdatePerson/UpdatePerson';
import {CreateAccount} from './Components/CreateAccount/CreateAccount';
import {Apply} from './Components/Apply/Apply';
import {ListApplications} from './Components/ListApplications/ListApplications';
import {ShowApplication} from './Components/ShowApplication/ShowApplication';
import {Authorized} from './Components/Authorized/Authorized';

const App=()=>
  <div className="App">
    <Authorized value={true}>
      <Header/>
      <div className="flexParent">
        <Menu/>
        <div className="mainContent">
          <Switch>
            <Route path="/example" component={Example}/>
            <Route path="/create" component={CreateAccount}/>
            <Route path="/applications" component={ListApplications}/>
            <Route path="/applicationdetails" component={ShowApplication}/>
            <Route path="/apply" component={Apply}/>
            <Route path="/updateperson" component={UpdatePerson}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </div>
      <Footer/>
    </Authorized>
    <Authorized value={false}>
      <Switch>
        <Route exact path="/forgotpassword" component={ForgotPassword}/>
        <Route exact path="/updateperson/:token" component={UpdatePerson}/>
        <Route exact path="/" component={Login}/>
        <Redirect to="/"/>
      </Switch>
    </Authorized>
  </div>;

export default App;
