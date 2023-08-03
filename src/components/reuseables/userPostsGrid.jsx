import React, {useRef} from 'react'
import {
  Box,
  Typography,
  Divider,
  Button,
  Input,
  IconButton,
  InputAdornment,
  FormControl,
  Avatar,
  Grid,
} from '@mui/material'

import UserFeaturedPost from './UserFeaturedPost';
import UserPost from './UserPost';

export default function userposts() {

  const [userData, setUserData] = React.useState(null)

  const scrollHorizontally = () => {
    const elRef = useRef();
    React.useEffect(() => {
      const el = elRef.current;
      
      if(el) {
         const onWheel = e => {
          if(e.deltaY == 0) {
            return
          }
          else if(e.deltaY > 0) {
            e.preventDefault();
            el.scrollTo({
              left: el.scrollLeft + e.deltaY + 200,
              behavior: "smooth"
            })
          }
          else {
            e.preventDefault();
            el.scrollTo({
              left: el.scrollLeft + e.deltaY - 200,
              behavior: "smooth"
            })
          }
         };
         el.addEventListener("wheel", onWheel);
         return () => el.removeEventListener("wheel", onWheel);
      }
    }, [])

    return elRef
  }

  const scrollRef = scrollHorizontally()

  React.useEffect(() => {

    console.log(userData)
  }, [])
  return (
    <>
      <Box sx={{
        display: "flex",
        flexDirection: "column",  
      }}>
        {/* USER FEATURED POSTS */}
        <Typography
          fontFamily="Raleway"
          fontWeight="700"
          fontSize="24px"
          sx={{
            mt: 5,
            mb: 2,
          }}
        >
          Featured Posts
        </Typography>
        <Grid container >
          <Grid item
            ref={scrollRef}
            sx={{
              display: "flex",
              flexDirection: "row",
              maxWidth: '100%',
              overflowX: 'auto',
              width: "1000px",
              '&::-webkit-scrollbar': {
                width: "1px",
                height: "8px",
              },
              '&::-webkit-scrollbar-thumb': {
                background: "#333",
                borderRadius: "10px",
                width: "5px"
              }
            }}>
            <UserFeaturedPost />
            <UserFeaturedPost />

            <UserFeaturedPost />

            <UserFeaturedPost />

            <UserFeaturedPost />
            <UserFeaturedPost />
            <UserFeaturedPost />

            <UserFeaturedPost />

            <UserFeaturedPost />

            <UserFeaturedPost />
            <UserFeaturedPost />
            <UserFeaturedPost />

            <UserFeaturedPost />

            <UserFeaturedPost />

            <UserFeaturedPost />
            <UserFeaturedPost />
            <UserFeaturedPost />

            <UserFeaturedPost />

            <UserFeaturedPost />

            <UserFeaturedPost />

          </Grid>

        </Grid>

        {/* USER FEED POSTS */}
        <Typography
          fontFamily="Raleway"
          fontWeight="700"
          fontSize="24px"
          sx={{
            mt: 2,
            mb: 2,
          }}>
          Feed
        </Typography>

        <Grid container
          rowSpacing={3}
          columnSpacing={{
            xs: 0,
            sm: 0,
            md: 0
          }}
        >
          <Grid item xs={6}>
            <UserPost />
          </Grid>
          <Grid item xs={6}>
            <UserPost />
          </Grid>

          <Grid item xs={6}>
            <UserPost />
          </Grid>
          <Grid item xs={6}>
            <UserPost />
          </Grid>
          <Grid item xs={6}>
            <UserPost />
          </Grid>
          <Grid item xs={6}>
            <UserPost />
          </Grid>

          <Grid item xs={6}>
            <UserPost />
          </Grid>
          <Grid item xs={6}>
            <UserPost />
          </Grid>

        </Grid>

      </Box>
    </>
  )
}
