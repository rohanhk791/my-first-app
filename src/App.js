import photo1 from './assets';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo1.jpg} className="App-logo" alt="logo" />
        <h1>
          React nodejs
        </h1>
        <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
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
