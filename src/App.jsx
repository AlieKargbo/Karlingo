import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './comp/nav';
import Home from './comp/home';
import Tm from './comp/t/tm'
import Kr from './comp/k/kr'
import Md from './comp/m/md'
import About from './comp/about'
import Welcome from './pages/welcome'
import Learn from './pages/learn'
import Lesson from './pages/lesson';
import Auth from './pages/auth'
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import Protected from './context/protected';
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {

  return (
    <>
      <UserAuthContextProvider>
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Temne" element={<Tm />} />
          <Route path="/Krio" element={<Kr />} />
          <Route path="/Mende" element={<Md />} />
          <Route path="/about" element={<About />} />
          <Route path="/welcome" element={
              <Protected>
                <Welcome />
              </Protected>
            } />
          <Route path="/learn" element={
              <Protected>
                <Learn />
              </Protected>
            } />
          <Route path="/lesson" element={
              <Protected>
                <Lesson />
              </Protected>
            } />
          <Route path="/auth/*" element={<Auth />} />
        </Routes>
        </Router>
      </UserAuthContextProvider>
    </>
  )
}

export default App
