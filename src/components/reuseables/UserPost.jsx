import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  Rating,
  Box,
  IconButton
} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default function UserPost() {

  const postRedirect = () => {

  }
  
  return (
    <>
      <Card sx={{
        height: 470,
        width: 470,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: "15px",
        cursor: "pointer"
      }} 
      onClick={() => postRedirect()}
      >
        <CardContent>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            p: 3
          }}>
            {/* POST TYPE */}
            <Typography
              fontFamily="Raleway"
              fontWeight="500"
              fontSize="16px"
              sx={{
                opacity: "60%",
                color: "#FFFFFF"
              }}>
              Review
            </Typography>

            {/* POST BODY */}

            <Box sx={{
              display: "flex",
              flexDirection: "column"
            }}>
              <Typography
                fontFamily="Raleway"
                fontWeight="700"
                fontSize="32px"
                sx={{
                  color: "white",
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '2',
                  WebkitBoxOrient: 'vertical',
                }}
                
              >
                Gentlemen, it has been an honor playing with you tonight.

              </Typography>
              {/* IMAGE AND TEXT POSTS */}

              {/* TEXT POSTS ONLY */}
              <Box sx={{

              }}>
                <Typography
                  fontFamily="Raleway"
                  fontWeight="500"
                  fontSize="16px"
                  sx={{
                    color: "#999",
                    mt: 2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '9',
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus molestiae maxime, adipisci accusantium vitae dolore totam dolor facere corrupti. Nihil, repellat nam. Temporibus, similique minima! Itaque dolorem debitis veritatis!
                  Dolore dignissimos vel at dolores accusantium facere dolorum molestiae eius ab consequatur numquam, fugit illo corrupti non placeat perspiciatis. Harum, vero provident. Provident possimus dolorum, officiis ipsam nemo doloribus officia.
                </Typography>
              </Box>
            </Box>

            {/* USER INTERACTIONS */}
            <Box sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mt: 2
            }}>
              <IconButton>
                <FavoriteBorderIcon sx={{
                  color: "#ffffff"
                }} />
              </IconButton>
              <IconButton>
                <ChatBubbleOutlineIcon style={{
                  color: "#ffffff"
                }} />
              </IconButton>
              <IconButton>
                <ShareIcon sx={{
                  color: "#ffffff"
                }} />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}
