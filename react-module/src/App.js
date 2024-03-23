import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePageComponent from './components/HomePageComponent';
import RegistrationPageComponent from './components/RegistrationPageComponent';
import UserDetailsComponent from './components/UserDetailsComponent';
import LoginPageComponent from './components/LoginPageComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';


function App () {
  return (
    <div className="container-fluid p-0">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomePageComponent />} />
          <Route path='register' element={<RegistrationPageComponent />} />
          <Route path='login' element={<LoginPageComponent />} />
          <Route path='user/:username' element={<UserDetailsComponent />} />
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
