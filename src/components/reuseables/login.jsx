import React from 'react'
import {
    GoogleAuthProvider,
    signInWithPopup,

} from "firebase/auth"
import { auth } from "../../config/firebase"

import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { FcGoogle } from 'react-icons/fc/index'
import { FaApple } from 'react-icons/fa/index'

import { useAuth } from '../utils/authContext';

import {
    Box,
    Typography,
    Divider,
    Button,
    Input,
    IconButton,
    InputAdornment,
    FormControl,
} from '@mui/material'


export default function login({ close, signUp }) {

    const {user, createAccount, loginToAccount } = useAuth()

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword ,setShowPassword] = React.useState(false);
    const [formSwitch, setForm] = React.useState(signUp)

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    const handleVisibilityChange = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = (e) => {
        const userInfo = {email, password}

        formSwitch ? createAccount(userInfo, this.props.close) : loginToAccount(userInfo, close)
    }

    return (
        <>
            <Box sx={{
                zIndex: 999
            }}>
                <Box sx={{
                    width: "100%",
                    backgroundColor: "#000000",
                    opacity: "75%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: '100%'
                }}></Box>

                <Box sx={{
                    position: 'fixed',
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#0A0A0C",
                    width: "490px",
                    height: "800px",
                    borderRadius: "15px",
                }}>
                    <Box sx={{
                        width: "100%",
                        display: 'flex',
                        justifyContent: "flex-end"
                    }}>
                        <CloseIcon sx={{
                            pt: 3,
                            pr: 3,
                            cursor: "pointer",
                        }} onClick={() => close()} />
                    </Box>
                    <Box sx={{
                    }}>

                        {/* O-AUTH LOGIN METHODS */}

                        <Box sx={{ p: 5 }}>
                            <Typography
                                fontWeight="700"
                                fontFamily="Raleway"
                                sx={{
                                    fontSize: "40px"
                                }}>{formSwitch == true ? "Sign Up" : "Login"}</Typography>
                            <Typography fontWeight="600" sx={{
                                opacity: "50%",
                                pt: 2,
                                pl: 2,
                                pb: 4,
                            }}>
                                {formSwitch == true ? "Sign up to start posting and commenting!" : "Login to your account to continue"}
                            </Typography>

                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <Button variant="contained"
                                    startIcon={<FcGoogle />}
                                    sx={{
                                        py: 1,
                                        ml: 2,
                                        mr: 2,
                                        borderRadius: "40px",
                                        color: "#000000",
                                        fontWeight: "700",
                                        fontFamily: "Raleway",
                                        fontSize: "13px",
                                        backgroundColor: "#FFFFFF",
                                        '&:hover': {
                                            backgroundColor: "#FFFFFF",
                                        }
                                    }}

                                    onClick={() => signInWithGoogle()}
                                >
                                    Continue with Google
                                </Button>

                                <Button variant="contained"
                                    startIcon={<FaApple />}
                                    sx={{
                                        py: 1,
                                        mt: 2,
                                        ml: 2,
                                        mr: 2,
                                        borderRadius: "40px",
                                        color: "#000000",
                                        fontWeight: "700",
                                        fontFamily: "Raleway",
                                        fontSize: "13px",
                                        backgroundColor: "#FFFFFF",
                                        '&:hover': {
                                            backgroundColor: "#FFFFFF",
                                        }
                                    }}>
                                    Continue with Apple
                                </Button>
                            </Box>
                        </Box>

                        {/* EMAIL LOGIN */}

                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "space-evenly"
                        }}>
                            <Divider sx={{
                                backgroundColor: "#FFFFFF",
                                maxWidth: "43%",
                                width: "100%",
                                opacity: "30%",
                                height: "1px"
                            }} />
                            <Typography
                                fontWeight="500"
                                fontFamily="Raleway">
                                Or</Typography>
                            <Divider sx={{
                                backgroundColor: "#FFFFFF",
                                maxWidth: "43%",
                                width: "100%",
                                opacity: "30%",
                                height: "1px"
                            }} />
                        </Box>

                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            pl: 6,
                            pb: 6,
                            pr: 6,
                            pt: 4,
                        }}>

                            <FormControl required>
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    disableUnderline
                                    sx={{
                                        color: "#000000",
                                        backgroundColor: "#FFFFFF",
                                        px: 1.5,
                                        py: 0.5,
                                        ml: 1,
                                        mr: 1,
                                        mt: 2,
                                        borderRadius: "40px",
                                        '& ::placeholder': {
                                            fontWeight: "600",
                                            fontFamily: "Raleway",
                                            pl: 1,
                                        }
                                    }}
                                    autoComplete="off"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </FormControl>

                            <FormControl required>
                                <Input
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <IconButton onClick={() => handleVisibilityChange()}>
                                                {showPassword ? <VisibilityIcon /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    placeholder="Password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    disableUnderline
                                    sx={{
                                        color: "#000000",
                                        backgroundColor: "#FFFFFF",
                                        px: 1.5,
                                        py: 0.5,
                                        ml: 1,
                                        mr: 1,
                                        mt: 2,
                                        borderRadius: "40px",
                                        '& ::placeholder': {
                                            fontWeight: "600",
                                            fontFamily: "Raleway",
                                            pl: 1,
                                        }
                                    }}
                                    autoComplete="off"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </FormControl>


                            {formSwitch ? <></> :
                                <Button variant="text"
                                    disableRipple
                                    sx={{
                                        fontWeight: "700",
                                        fontSize: "12px",
                                        fontFamily: "Raleway",
                                        backgroundColor: "transparent",
                                        mt: 1,
                                        width: "40%",
                                        '&:hover': {
                                            background: "none"
                                        }
                                    }}
                                    onClick={() => sendForgotPasswordEmail()}
                                >
                                    Forgot Password?
                                </Button>
                            }

                            <Button variant="contained" disableRipple sx={{
                                px: 1.5,
                                py: 1,
                                mt: 7,
                                ml: 1,
                                mr: 1,
                                borderRadius: "40px",
                                color: "#FFFFFF",
                                fontWeight: "600",
                                fontFamily: "Raleway",
                                fontSize: "13px",
                                backgroundColor: "#F55C7B",
                                opacity: email != "" ? 1 : 0.5,
                                cursor: email != "" ? "pointer" : "not-allowed",
                                '&:hover': {
                                    backgroundColor: "#F55C7B",
                                }
                            }}
                                onClick={ () => handleSubmit() }
                            >
                                Continue
                            </Button>

                            <Typography
                                fontWeight="500"
                                fontFamily="Raleway"
                                fontSize="14px"
                                sx={{
                                    ml: 2,
                                    mt: 6,
                                }}>
                                {formSwitch == true ? "Already have an account? " : "Don't have an account? "}
                                <Button variant="text"
                                    disableRipple
                                    sx={{
                                        fontSize: "14px",
                                        fontFamily: "Raleway",
                                        backgroundColor: "transparent",
                                        width: "30%",
                                        m: 0,
                                        p: 0,
                                        textTransform: "capitalize",
                                        '&:hover': {
                                            background: "none"
                                        }
                                    }}
                                    onClick={
                                        () => setForm(!formSwitch)
                                    }>
                                    {formSwitch == true ? "Sign in Here" : "Sign up here"}
                                </Button>

                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
