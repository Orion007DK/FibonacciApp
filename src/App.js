import logo from './logo.svg';
import './App.css';
import Fibonacci from './Fibonacci.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
			Aplikacja obliczająca n-ty element ciągu Fibonacciego
        </p>
        <a
          className="App-link"
          href="https://pl.wikipedia.org/wiki/Ci%C4%85g_Fibonacciego"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ciąg Fibonacciego
        </a>
				<Fibonacci/>
		
		
      </header>
	  <div class="content">
	  </div>
    </div>
  );
}

export default App;
