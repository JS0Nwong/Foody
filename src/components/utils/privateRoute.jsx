import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './authContext'

const PrivateRoute = () => {
    const { user } = useAuth()

    return user ? <Outlet /> : <Navigate to="/profile" />
}

export default PrivateRoute
