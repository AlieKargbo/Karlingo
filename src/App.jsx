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
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/t" element={<Tm />} />
        <Route path="/k" element={<Kr />} />
        <Route path="/m" element={<Md />} />
        <Route path="/about" element={<About />} />

    </Routes>
  )
}

export default App
