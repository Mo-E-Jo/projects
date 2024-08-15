import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar.js'; 

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <SearchBar />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Does this change reflect?
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
