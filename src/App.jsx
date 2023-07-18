import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import {
  HomepageContainer
} from "./components/containers"
import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="" element={<HomepageContainer />}/>
      </Routes>
    </div>
  )
}

export default App
