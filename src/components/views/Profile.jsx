import React from 'react'
import Navbar from '../reuseables/Navbar'
import Trending from '../reuseables/Trending'
import Login from '../reuseables/Login'

import UserPosts from '../reuseables/userPostsGrid'
import UserProfile from '../reuseables/userProfile'
import Search from "../reuseables/Search"
import PostModal from '../reuseables/PostModal'

import AuthContext from '../utils/authContext'
import {
  Box,
  Typography,
  IconButton
} from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';


export default function Profile() {

  const [showPostModal, setShowPostModal] = React.useState(false)

  return (
    <>
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        maxHeight: showPostModal ? "100vh" : "100%",
        overflow: showPostModal ? "hidden" : "auto"
      }}>
        <Box sx={{
          maxWidth: "850px",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "row",
        }}>
          <Navbar
            openPostModal={() => setShowPostModal(true)}
          />
          <UserProfile />
        </Box>
      

        <Box sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "100%",
          ml:"850px",
          
        }}>
          <UserPosts />
        </Box>
      </Box>

      {showPostModal &&
        <PostModal
          close={() => setShowPostModal(false)}
        />
      }
    </>
  )
}
