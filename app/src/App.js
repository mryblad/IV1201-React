import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a build test.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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