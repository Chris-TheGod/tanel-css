import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'
import { Albums } from './views/Albums'
import { Layout } from './components/Layout'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='albums' element={<Albums />} />
      </Routes>
    </div>
  )
}

export default App
