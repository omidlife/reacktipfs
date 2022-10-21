import logo from './logo.svg';
import './App.css';
import { Wave } from 'react-animated-text';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Wave text="EXAMPLE TEXT" effect="stretch" effectChange={2.2} />
        <img src={logo} id="App-logo" className="App-logo1" alt="logo" typeof='image/svg+xml' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
