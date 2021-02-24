import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import {Header} from './Components/Header/Header';
import {Footer} from './Components/Footer/Footer';
import {Menu} from './Components/Menu/Menu';
import {HomePage} from './Components/HomePage/HomePage';
import {Example} from './Components/Example/Example';
import {Login} from './Components/Login/Login';
import {ForgotPassword} from './Components/ForgotPassword/ForgotPassword';
import {UpdatePerson} from './Components/UpdatePerson/UpdatePerson';
import {CreateAccount} from './Components/CreateAccount/CreateAccount';
import {Apply} from './Components/Apply/Apply';
import {ListApplications} from './Components/ListApplications/ListApplications';
import {ShowApplication} from './Components/ShowApplication/ShowApplication';
import {Authorized} from './Components/Authorized/Authorized';
import {UserType} from './Components/UserType/UserType';
import {ApplicantRedirect} from './Components/ApplicantRedirect/ApplicantRedirect';

const App=()=>
  <div className="App">
    <Authorized value={true}>
      <Header/>
      <div className="flexParent">
        <Menu/>
        <div className="mainContent">
          <Route path="/example" component={Example}/>
          <UserType value="recruiter">
            <Switch>
              <Route path="/applications" component={ListApplications}/>
              <Route path="/applicationdetails" component={ShowApplication}/>
              <Redirect to="/"/>
            </Switch>
          </UserType>
          <UserType value="applicant">
            <Switch>
              <Route path="/apply" component={Apply}/>
              <Route path="/updateperson" component={UpdatePerson}/>
              <ApplicantRedirect/>
            </Switch>
          </UserType>
        </div>
      </div>
      <Footer/>
    </Authorized>
    <Authorized value={false}>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/login" component={Login}/>
        <Route path="/create" component={CreateAccount}/>
        <Route path="/forgotpassword" component={ForgotPassword}/>
        <Route path="/updateperson/:token" component={UpdatePerson}/>
        <Redirect to="/"/>
      </Switch>
    </Authorized>
  </div>;

export default App;
