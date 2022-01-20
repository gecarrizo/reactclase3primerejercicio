import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navegation/Navbar';

function App() {
  return (
      <div className='App'>
        <Router>
          <Navbar/>
        </Router>
      </div>
    );
}

export default App;
