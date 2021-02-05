import './App.css';
import apiService from "./Services/apiService.js";




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is a build test.
        </p>
        //Temporary code (and buttons) to test fetches from database
        <input type="button" value="1" onClick={console.log(apiService.getPersonById(1))}/>
        <input type="button" value="2" onClick={console.log(apiService.getPersonById(2))}/>
      </header>


	  {
		  /*
		<!-- The core Firebase JS SDK is always required and must be listed first -->
		<script src="/__/firebase/8.2.5/firebase-app.js"></script>

		<!-- TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries -->
		<script src="/__/firebase/8.2.5/firebase-analytics.js"></script>

		<!-- Initialize Firebase -->
		<script src="/__/firebase/init.js"></script>
		*/
	  }
    </div>
  );
}

export default App;
