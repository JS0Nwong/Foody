import React from 'react'
import Navbar from './Navbar'
import Trending from './Trending'
import Login from './Login'

import { auth, db } from "../../config/firebase"
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore"
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendSignInLinkToEmail,
    sendPasswordResetEmail,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signOut
} from "firebase/auth"

import {
    Box,
    Typography,
    Avatar,
    IconButton
} from '@mui/material'

import EditIcon from '@mui/icons-material/Edit';

export default function userProfile() {

    const [username, setUsername] = React.useState("")
    const [displayName, setDisplayName] = React.useState("")
    const [followers, setFollowers] = React.useState(0)
    const [numberOfPosts, setNumberOfPosts] = React.useState(0)
    const [featured, setFeatured] = React.useState([])
    const [profession, setProfession] = React.useState("")
    const [followedTopics, setFollowedTopics] = React.useState([])
    const [userBio, setUserBio] = React.useState("")
    const [location, setLocation] = React.useState("")


    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            const docRef = doc(db, "users", user.uid)

            onSnapshot(docRef, (docSnap) => {
                if(docSnap.exists()) {
                    setFollowers(docSnap.data().number_of_followers)
                    setUsername(docSnap.data().username)
                    setDisplayName(docSnap.data().display_name)
                    setUserBio(docSnap.data().user_bio)
                    setNumberOfPosts(docSnap.data().number_of_posts)
                    setFeatured(docSnap.data().featured_posts)
                    setProfession(docSnap.data().profession)
                    setFollowedTopics(docSnap.data().followed_topics)
                    setLocation(docSnap.data().location)
                }
                else {
                    console.log("error getting user data")
                }

            })
        })
    }, [])

    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "450px",
                width: "100%",
                pl: 8,
                pt: 13,
                pr: 0,
                pb: 8,
            }}>
                <Avatar sx={{
                    width: "128px",
                    height: "128px",
                }}></Avatar>

                <Box sx={{
                    mt: 3
                }}>

                    {/* USER INFORMATION */}
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <Typography
                            fontWeight="700"
                            fontFamily="Raleway"
                            fontSize="24px"
                        >
                            {displayName}
                        </Typography>
                        <IconButton
                            disableRipple
                            sx={{
                                color: "#FFFFFF",
                            }}>
                            <EditIcon sx={{
                                height: 16,
                                width: 16,
                                pl: 1
                            }} />
                        </IconButton>
                    </Box>

                    <Typography
                        fontWeight="700"
                        fontFamily="Raleway"
                        sx={{
                            opacity: "50%"
                        }}
                    >
                        @{username}
                    </Typography>

                    {/* USER STATISTICS */}
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        width: "60%",
                        mt: 1
                    }}>
                        <Typography fontWeight="700" fontFamily="Raleway">
                            {followers} <span style={{
                                fontWeight: "700",
                                opacity: "50%",
                                fontSize: "14px"
                            }}>Followers</span>
                        </Typography>
                        <Typography fontWeight="700" fontFamily="Raleway" sx={{
                            ml: 3
                        }}>
                            {numberOfPosts} <span style={{
                                fontWeight: "700",
                                opacity: "50%",
                                fontSize: "14px",
                            }}>Posts</span>
                        </Typography>
                    </Box>

                    {/* USER BIO */}

                    {userBio != "" ? <Typography
                        fontWeight="500"
                        fontFamily="Raleway"
                        sx={{
                            mt: 3,
                            width: "80%",
                        }}>
                        {userBio}
                    </Typography> : <Typography
                        fontWeight="500"
                        fontFamily="Raleway"
                        sx={{
                            mt: 3,
                            width: "80%"
                        }}>
                        No bio yet
                    </Typography>}
                </Box>

                {/* USER FOLLOWED TOPICS */}

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    mt: userBio != "" ? 0 : 2,
                    height:  userBio != "" ? "100%" : "auto" 
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <Typography
                            fontFamily="Raleway"
                            fontWeight="700"
                            sx={{
                                opacity: "50%"
                            }}>Followed Topics</Typography>
                        <Typography
                            fontFamily="Raleway"
                            fontWeight="500"
                            sx={{
                                opacity: "80%",
                                mt: 1
                        }}>{
                            followedTopics.length != 0 || "" ? followedTopics.map((topic, key) => {
                                return(
                                    <span key={key}>{topic}</span>
                                )
                            }) : "No followed topics" 
                        }</Typography>
                    </Box>

                    {/* USER PROFESSION */}
                    <Box>
                        <Typography
                            fontFamily="Raleway"
                            fontWeight="700"
                            sx={{
                                opacity: "50%"
                            }}>Profession</Typography>
                        <Typography
                            fontFamily="Raleway"
                            fontWeight="500"
                            sx={{
                                opacity: "80%",
                                mt: 1
                            }}>{ profession != "" ? profession : "No profession" }</Typography>
                    </Box>

                    {/* USER LOCATION */}
                    <Box>
                        <Typography
                            fontFamily="Raleway"
                            fontWeight="700"
                            sx={{
                                opacity: "50%"
                            }}>Location</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
