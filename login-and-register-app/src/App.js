import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
// import { Routes ,Route } from 'react-router-dom';

function App() {

  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path='/'><Homepage /></Route> */}
          <Route exact path="/" element={user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
          <Route exact path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route exact path="/register" element={<Register  />} />
          {/* <Route path="*" element={<NotFound/>}/> */}
          {/* <Route path='/login'><Login /></Route>
          <Route path='/register'><Register /></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
