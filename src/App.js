import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import { useEffect } from 'react';
import axios from 'axios';

function People () {
  useEffect( () => {
    getPeople()
  });
  
}

const getPeople = () => {
  axios.get('https://swapi.dev/api/people/?page=${currentPage}', {})
  .then((res) => {

  })
  .catch((error) => {

  })
}

console.log(getPeople);

function App() {
  useEffect( () => {
    getPeople()
    console.log('iriririri')
  });

  return (
    
    <div className="App">
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
          Learn React
        </a>
        <div>
        <Button color="danger">Danger!</Button>
        
    </div> 
      </header>
    </div>
  );
}

export default App;
