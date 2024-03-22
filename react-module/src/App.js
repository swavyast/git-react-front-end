import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePageComponent from './components/HomePageComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="container card mt-1">
      <h1 className="text-center"><FontAwesomeIcon icon={faGithub} /> Git Manager</h1>
      <div className="container">
          <Router>
            <Routes>
              <Route path='/' element={<HomePageComponent />} />
            </Routes>
          </Router>
      </div>
    </div>
  );
}

export default App;
