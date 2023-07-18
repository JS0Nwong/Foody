import React from 'react'
import Navbar from '../reuseables/navbar'
import Trending from '../reuseables/trending'
import Login from  '../reuseables/login'
import { 
    Box,
    Typography
} from '@mui/material'

export default function Homepage() {
    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%"
            }}>
                <Navbar />
                <Login />
                <Trending />
            </Box>
        </>
    )
}
