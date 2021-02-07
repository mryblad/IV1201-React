import './App.css';
import {Header} from './Components/Header/Header';
import {Footer} from './Components/Footer/Footer';
import {Menu} from './Components/Menu/Menu';
import {Example} from './Components/Example/Example'

const App=()=> 
  <div className="App">
    <Header/>
    <div className="flexParent">
      <Menu/>
      <div className="mainContent">
        <Example/>
      </div>
    </div>
    <Footer/>
  </div>;

export default App;
