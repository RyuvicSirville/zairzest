import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import HomeReg from "./HomeReg.jsx";
import Signup from './Signup.jsx';
import Signin from './Signin.jsx';
import Techevents from './Techevents.jsx';
import Aboutus from './Aboutus.jsx';
import Funevents from './Funevents.jsx';
function App() {
  return (
    <div>
      <div>
        <Router>
          <Routes >
            <Route path={"/zairzest"} element={<HomeReg />} />
            <Route path={"/signin"} element={<Signin />} />
            <Route path={"/signup"} element={<Signup />} />
            <Route path={"/aboutus"} element={<Aboutus />} />
            <Route path={"/techevents"} element={<Techevents />} />
            <Route path={"/funevents"} element={<Funevents />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
