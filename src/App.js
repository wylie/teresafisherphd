import { StyledDiv } from "./AppStyled.js";

import logo from './logo.svg';

function App() {
  return (
    <StyledDiv>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Again!<br/>
          Huzzah!
        </a>
      </header>
    </StyledDiv>
  );
}

export default App;
