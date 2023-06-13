import logo from './logo.svg';
import './App.css';
import './styles.css';
import Home from './components/Home.js';
import NavBar from './components/Navbar';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Home/>
      </div>
    </Router>
  );
}

export default App;