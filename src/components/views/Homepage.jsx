import React from 'react'
import Navbar from '../reuseables/Navbar'
import Trending from '../reuseables/Trending'
import Post from "../reuseables/Post"
import Search from "../reuseables/Search"

import AuthContext from '../utils/authContext'
import { 
    Box,
    Typography
} from '@mui/material'
import PostModal from '../reuseables/PostModal';

export default function Homepage() {

    const [showLogin, setShow] = React.useState(false)
    const toggleShowLogin = () => setShow(true)
    const [showPostModal, setShowPostModal] = React.useState(false)

    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                position: "relative"

            }}>
                {/* LEFT SIDE NAV WRAPPER */}
                <Box sx={{
                    maxWidth: "400px",
                    width: "100%",
                    position: "fixed",
                    top: 0,
                    left: 0,
                }}>
                    <Navbar openPostModal={() => setShowPostModal(true)}/>
                </Box>
                {/* MIDDLE CONTENT WRAPPER */}
                <Box sx={{
                    width: "100%",
                    ml: "400px",
                    mr: "400px",
                }}>
                    <Box sx={{
                        ml: 15,
                        mr: 15,
                        mt: 7,
                        mb: 7,
                    }}>
                        <Search />
                    </Box>
                    <Box sx={{
                        ml: 15,
                        mr: 15,
                        mt: 7,
                    }}>
                        <Post />
                        <Post />
                    </Box>
                </Box>

                {/* TRENDINGS TAB WRAPPER */}
                <Box sx={{
                    maxWidth: "400px",
                    width: "100%",
                    position: "fixed",
                    top: 0,
                    right: 0,
                }}>
                    <Trending />

                </Box>
            </Box>

            {showPostModal && 
                <PostModal 
                    close = {() => setShowPostModal(false)}
                />
            }
        </>
    )
}
