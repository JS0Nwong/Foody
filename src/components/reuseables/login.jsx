import React from 'react'
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendSignInLinkToEmail,
    sendPasswordResetEmail,
  } from "firebase/auth"
import {auth, db} from "../../config/firebase"
import CloseIcon from '@mui/icons-material/Close';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import { 
    Box,
    Typography,
    Divider,
    Button,
    Input,
} from '@mui/material'


export default function login() {

    const [email, setEmail] = React.useState("");

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {

            }
        })
    })

    return (
        <>
            <Box sx={{
                position: 'fixed',
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "darkblue",
                width: "500px",
                height: "720px",
                borderRadius: "15px"
            }}>
                <Box sx={{
                }}>
                    <CloseIcon sx={{
                        width: "100%",
                        pt: 3,
                        cursor: "pointer"
                    }}/>

                    <Box sx={{ p: 5 }}>
                        <Typography
                            fontWeight="600"
                            fontFamily="Raleway"
                            sx={{
                                fontSize: "40px"
                            }}>Login</Typography>
                        <Typography fontWeight="600" sx={{
                            opacity: "50%",
                            p: 3
                        }}>
                            Login to your account to continue
                        </Typography>

                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <Button variant="contained" sx={{
                                px: 1.5,
                                py: 1,
                                borderRadius: "40px",
                                color: "#000000",
                                fontWeight: "700",
                                fontFamily: "Raleway",
                                fontSize: "13px",
                                backgroundColor: "#FFFFFF",
                                opacity: email != null || "" ? 1 : 0.5,
                                '&:hover': {
                                    backgroundColor: "#FFFFFF",
                                }
                            }}
                                onClick={signInWithGoogle()}
                            >
                                Continue with Google
                            </Button>

                            <Button variant="contained" sx={{
                                px: 1.5,
                                py: 1,
                                mt: 2,
                                borderRadius: "40px",
                                color: "#000000",
                                fontWeight: "700",
                                fontFamily: "Raleway",
                                fontSize: "13px",
                                backgroundColor: "#FFFFFF",
                                opacity: email != null || "" ? 1 : 0.5,
                                '&:hover': {
                                    backgroundColor: "#FFFFFF",
                                }
                            }}>
                                Continue with Apple
                            </Button>
                        </Box>

                       
                    </Box>

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
                        }}/>
                        <Typography>Or</Typography>
                        <Divider sx={{
                            backgroundColor: "#FFFFFF",
                            maxWidth: "43%",
                            width: "100%",
                            opacity: "30%",
                            height: "1px"
                        }}/>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        p: 6
                    }}>
                        <Typography
                            fontWeight="600"
                            fontFamily="Raleway" sx={{
                                mb: 2
                            }}>Email</Typography>

                        <Input
                            placeholder="example@email.com"
                            type="email"
                            name="email"
                            disableUnderline ="true"
                            sx={{
                                color: "#000000",
                                backgroundColor: "#FFFFFF",
                                px: 1.5,
                                py: 0.5,
                                borderRadius: "40px",
                            }}
                            autoComplete="off"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />

                        <Button variant="contained" sx={{
                            px: 1.5,
                            py: 1,
                            mt: 4,
                            borderRadius: "40px",
                            color: "#FFFFFF",
                            fontWeight: "600",
                            fontFamily: "Raleway",
                            fontSize: "13px",
                            backgroundColor: "#F55C7B",
                            opacity: email != "" ? 1 : 0.5,
                            '&:hover' : {
                                backgroundColor: "#F55C7B",
                            }
                        }}>
                            Continue
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
