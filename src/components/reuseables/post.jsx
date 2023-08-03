import React from 'react'
import { Box, Typography, Avatar, IconButton } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function post() {

  return (
    <>
      <Box sx={{
        display: "flex",
        borderRadius: '15px',
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        width: "100%",
        height: '100%',
        flexDirection: "column",
        mb: 3
      }}>
        <Box sx={{
          p: 4,
          display: 'flex',
          flexDirection: "row",
          alignItems: 'center',
        }}>
          <Avatar sx={{
            width: 48,
            height: 48,
          }}>

          </Avatar>

          <Box sx={{
            display: 'flex',
            flexDirection: "column",
            ml: 2
          }}>
            <Typography sx={{
              fontFamily: "Raleway",
              fontWeight: "600",
              fontSize: "1rem"
            }}>asdsad</Typography>
            <Typography sx={{
              fontFamily: "Raleway",
              fontWeight: "400",
              fontSize: "1rem",
              color: "rgba(255, 255, 255, 0.6)"
            }}>3h ago</Typography>

          </Box>
        </Box>

        {/* POST BODY */}

        <Box sx={{
          display: "flex",
          flexDirection: "column",
          pl: 4,
          pr: 4,
        }}>
          <Typography
            fontFamily="Raleway"
            fontWeight="600"
            fontSize="2rem"
            sx={{
              lineHeight: 1.2
            }}
          >Gentlemen, it has been an honor playing with you tonight.</Typography>

          {/* IMAGE POST PREVIEW*/}
          <Box 
            component="image"
            sx={{
              height: "",
              width: "",
            }}
            src="">

          </Box>


          {/* TEXT POST PREVIEW*/}
          <Typography
            fontFamily="Raleway"
            fontWeight="600"
            fontSize="16px"
            sx={{
              lineHeight: 1.2,
              color: "#999",
              mt: 3,
              position: "relative",
              maxHeight: "250px",
              height: '100%',
              overflow: "hidden",

            }}>Although we have probably lost many users, we still have a strong community of moderators and those who have patched with ReVanced. If we could get some sort of poll on users that would help, but I'm sure the community is still here.
            I recently relaunched the rocket, to show my support, and regardless of what happens to Boost for Reddit, I won't regret that. I'm also very excited to use Boost for Lemmy. However, after patching my app and creating a subreddit becoming a moderator, I want to continue to use Boost, and would like to see it's development continued, too.
            Thank you mayayo.
            Although we have probably lost many users, we still have a strong community of moderators and those who have patched with ReVanced. If we could get some sort of poll on users that would help, but I'm sure the community is still here.
            I recently relaunched the rocket, to show my support, and regardless of what happens to Boost for Reddit, I won't regret that. I'm also very excited to use Boost for Lemmy. However, after patching my app and creating a subreddit becoming a moderator, I want to continue to use Boost, and would like to see it's development continued, too.
            Thank you mayayo.
            Although we have probably lost many users, we still have a strong community of moderators and those who have patched with ReVanced. If we could get some sort of poll on users that would help, but I'm sure the community is still here.
            I recently relaunched the rocket, to show my support, and regardless of what happens to Boost for Reddit, I won't regret that. I'm also very excited to use Boost for Lemmy. However, after patching my app and creating a subreddit becoming a moderator, I want to continue to use Boost, and would like to see it's development continued, too.
            <Box sx={{
              maxHeight: "70px",
              height: "100%",
              overflow: "hidden",
              background: "linear-gradient(rgba(0, 0, 0, 0), rgba(22, 22, 22, 0.85))",
              width: "100%",
              p: 0,
              position: "absolute",
              bottom: 0,
              left: 0,
            }}>
            </Box>
          </Typography>



        </Box>

        {/* USER INTERACTIONS */}
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: 'space-between',
          p: 4,
        }}>
          <Box sx={{
            color: "#ffffff"
          }}>
            <IconButton sx={{
              p: 0,
              mr: 2
            }}>
              <FavoriteBorderIcon sx={{
                color: "#ffffff"
              }} /><Typography sx={{
                fontSize: "14px",
                fontFamily: "Raleway",
                pl: 1,
                fontWeight: "600",
                color: "rgba(255, 255, 255, 0.6)"

              }}>{} likes</Typography>
            </IconButton>

            <IconButton sx={{
              p: 0,
              mr: 2

            }}>
              <ChatBubbleOutlineIcon sx={{
                color: "#ffffff"
              }} />
              <Typography sx={{
                fontSize: "14px",
                fontFamily: "Raleway",
                pl: 1,
                fontWeight: "600",
                color: "rgba(255, 255, 255, 0.6)"

              }}>{}comments</Typography>
            </IconButton>

            <IconButton sx={{
              p: 0,
            }}>
              <ShareIcon sx={{
                color: "#ffffff"
              }} />
              <Typography sx={{
                fontSize: "14px",
                fontFamily: "Raleway",
                pl: 1,
                fontWeight: "600",
                color: "rgba(255, 255, 255, 0.6)"

              }}>Share</Typography>
            </IconButton>
          </Box>


          <IconButton >
            <BookmarkBorderIcon sx={{
              color: "#ffffff"
            }} />
          </IconButton>

        </Box>
      </Box>
    </>
  )
}
