import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="AngryButton">
    {/* When the threshold is not reached */}<span>Don't click me too much! </span>
    {/* When the threshold is not reached */}<span>Rawr!</span>
  </button>
  <button className="CounterButton">
      You clicked me X amount of times
  </button>
  <button className="LightSwitchButton">
      {/* When the state is on */}<span><i>💡</i> I'm on!</span>
      {/* When the state is off */}<span className="off"><i>💡</i> I'm off!</span>
    </button>
    <button className="TextRepeaterButton">
      <span>I like this text</span>
  </button>
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
