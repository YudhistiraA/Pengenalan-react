import React, {Component} from 'react';  
import './App.css';  
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import BMI from './soal/BMI';
import Cicilan from './soal/Cicilan';
import Jualbeli from './soal/harga';
import KonversiBilangan from './soal/konversi';

  
class App extends Component {  
  render(){  
    return ( 
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/BMI" className="nav-link">BMI</Link>
              <Link to="/Cicilan" className="nav-link">Cicilan Bank</Link>
              <Link to="/Jualbeli" className="nav-link">Jualbeli</Link>
              <Link to="/Konversi" className="nav-link">Konversi Bilangan</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/BMI">
            <BMI />
          </Route>
          <Route path="/Cicilan">
            <Cicilan />
          </Route>
          <Route path="/Jualbeli">
            <Jualbeli />
          </Route>
          <Route path="/Konversi">
            <KonversiBilangan />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }  
}  
  
export default App;  