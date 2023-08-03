import React, { useEffect } from 'react'
import { onAuthStateChanged, } from "firebase/auth"
import { auth, db } from "../../config/firebase"
import {
    Box,
    Typography,
    Button,
    Avatar,
    Menu, 
    MenuItem,
} from '@mui/material'
import Login from "./Login"
import { useAuth } from '../utils/authContext';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export default function user() {

    const { logoutUser } = useAuth()
    const [showLogin, setShow] = React.useState(false)
    const [newUser, setNewUser] = React.useState(true)
    const toggleShowLogin = (bool, newUser) => {
        setShow(bool)
        setNewUser(newUser)
    }

    return (
        <>
            {auth.currentUser ?
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    p: 5
                }}>
                    <Avatar>{auth.currentUser.email[0]}</Avatar>
                    <Box sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        pl: 2
                    }}>
                        <Typography>
                            asadasd
                        </Typography>
                        <Box sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <Typography
                                fontWeight="600"
                                fontFamily="Raleway"
                                sx={{
                                    cursor: "pointer",
                                }}
                                onClick={() => logoutUser()}>
                                Sign out
                            </Typography>

                            <Typography
                                fontWeight="600"
                                fontFamily="Raleway"
                                sx={{
                                    cursor: "pointer",
                                    pl: 3
                                }}>
                                Profile
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                :
                // NOT SIGNED IN
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    p: 5
                }}>
                    <Box sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "100%",
                    }}>
                        <Typography
                            fontWeight="500"
                            fontFamily="Raleway"
                            sx={{
                                cursor: "pointer",
                            }}
                            onClick={() => toggleShowLogin(true, true)}>
                            Sign up
                        </Typography>

                        <Typography
                            fontWeight="500"
                            fontFamily="Raleway"
                            sx={{
                                cursor: "pointer",
                                pl: 3
                            }}
                            onClick={() => toggleShowLogin(true, false)}>
                            Login
                        </Typography>
                    </Box>
                </Box>}
            {showLogin && <Login
                showLogin={showLogin}
                close={() => toggleShowLogin(false)}
                signUp={newUser}
            />}
        </>
    )
}
