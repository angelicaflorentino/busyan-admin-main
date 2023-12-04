import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import People from './pages/ManageUser';
import Job from './pages/AccountVerification';
import Notification from './pages/Notification.jsx';
import Profile from './pages/Profile.jsx';
import LogOut from './pages/LogOut.jsx';
import Login from './components/Login.jsx';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);



  return (
    <BrowserRouter>
      {loggedIn ? (
        <Sidebar>
         <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/People" element={<People />} />
          <Route path="/Job" element={<Job />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/LogOut" element={<LogOut />} />
        </Routes>
        </Sidebar>
      ) : (
        <Routes>
          {/* Render the Login component by default */}
          <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
