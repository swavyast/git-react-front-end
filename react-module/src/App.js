import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePageComponent from './components/HomePageComponent';
import RegistrationPageComponent from './components/RegistrationPageComponent';
import UserDetailsComponent from './components/UserDetailsComponent';
import LoginPageComponent from './components/LoginPageComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AdminPanelComponent from './components/AdminPanelComponent';
import RepositoryComponent from './components/RepositoryComponent';
import RepositoryDetailsComponent from './components/RepositoryDetailsComponent';
import FeatureTestComponent from './components/FeatureTestComponent';


function App () {
  return (
    <div className="container-fluid p-0">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomePageComponent />} />
          <Route path='/test' element={<FeatureTestComponent />} />
          <Route path='/register' element={<RegistrationPageComponent />} />
          <Route path='/login' element={<LoginPageComponent />} />
          <Route path='/users/:username' element={<UserDetailsComponent />} />
          <Route path='/admin' element={<AdminPanelComponent />} />
          <Route path='/github' element={<RepositoryComponent />} />
          <Route path='/repos/:username/:name' element={<RepositoryDetailsComponent />} />
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
