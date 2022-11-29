import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Navigate, Route, Outlet, Routes,Link} from 'react-router-dom';
import Login from './components/Login';
import Friendslist from './components/Friendslist';
import Logout from './Logout';
import AddFriend from './components/AddFriend';
import Friend from './components/Friend';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") !== null)

  const ProtectedRoute = ({ user, children }) => {
    if (!user) {
      return <Navigate replace to="/login" />;
    }
  
    return children;
  };

  function RequireAuth() {
  
    if (!isLoggedIn) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" />;
    }
  
    return <Outlet />;
  }

  return (
    <div className="App">
      <header>
      <h2>Friends Database</h2>
      <nav>
        <Link to="/login">Login.</Link>
        <Link to="/friends/">Friendlist.</Link>
        <Link to="/friends/add">Add Friend.</Link>
        <Link to="/logout">Logout</Link>
      </nav>
      <Routes>
      <Route exact path="/" element={
            
            <Login setIsLoggedIn={setIsLoggedIn}/>
          
        } />
        <Route path="/login" element={
            
            <Login setIsLoggedIn={setIsLoggedIn}/>
          
        } />
        <Route element={<RequireAuth />}>
            <Route path="/friends/" element={<Friendslist />} />
            <Route path="/friends/add" element={<AddFriend />} />
            <Route path="/friends/:id" element={<Friend />} />

          </Route>
        <Route path="/logout" element={
            <Logout setIsLoggedIn={setIsLoggedIn}/>
        } />

      </Routes>
      </header>
    </div>
  );
}

export default App;
