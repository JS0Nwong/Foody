import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from './components/utils/privateRoute';
import {
  HomepageContainer,
  ProfileContainer
} from "./components/containers"
import { AuthProvider } from './components/utils/authContext';
import './App.css'

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomepageContainer />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfileContainer />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
