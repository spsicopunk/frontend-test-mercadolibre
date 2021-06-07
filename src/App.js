import logo from './logo.svg';
import './App.css';
import './Theme/theme.scss'


export const baseURL = process.env.REACT_APP_TITLE;



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{baseURL}<code> src/App.js</code> and save to reload.
        </p>
        <a
          className="fulanito"
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
