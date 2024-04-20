import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePageComponent from './components/class-components/HomePageComponent';
import RegistrationPageComponent from './components/class-components/RegistrationPageComponent';
import UserDetailsComponent from './components/class-components/UserDetailsComponent';
import LoginPageComponent from './components/class-components/LoginPageComponent';
import HeaderComponent from './components/class-components/HeaderComponent';
import FooterComponent from './components/class-components/FooterComponent';
import AdminPanelComponent from './components/class-components/AdminPanelComponent';
import RepositoryComponent from './components/class-components/RepositoryComponent';
import RepositoryDetailsComponent from './components/class-components/RepositoryDetailsComponent';
import FeatureTestComponent from './components/class-components/FeatureTestComponent';
import NewHome from './components/functional-components/NewHome';
import ErrorBoundary from './components/class-components/ErrorBoundary';
import { AuthProvider } from './components/class-components/context/AuthContext';


function App () {
  const [ dropdownStatus, setDropdownStatus ] = useState( false );
  return (
    <ErrorBoundary>
      <AuthProvider>
        <div className="container-fluid p-0 z-index-0">
          <Router>
            <HeaderComponent dropdownStatus={dropdownStatus} setDropdownStatus={setDropdownStatus} />
            <Routes>
              <Route path='/' element={<NewHome dropdownStatus={dropdownStatus} setDropdownStatus={setDropdownStatus} />} />
              {/* <Route path='/' element={<HomePageComponent dropdownStatus={dropdownStatus} setDropdownStatus={setDropdownStatus} />} /> */}
              <Route path='/test' element={<FeatureTestComponent />} />
              <Route path='/register' element={<RegistrationPageComponent  />} />
              <Route path='/login' element={<LoginPageComponent  />} />
              <Route path='/users/:username' element={<UserDetailsComponent  />} />
              <Route path='/admin' element={<AdminPanelComponent  />} />
              <Route path='/github' element={<RepositoryComponent  />} />
              <Route path='/repos/:username/:name' element={<RepositoryDetailsComponent />} />
            </Routes>
            <FooterComponent />
          </Router>
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
