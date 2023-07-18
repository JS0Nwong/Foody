import React from 'react'
import { 
    Box,
    Typography
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ListAltIcon from '@mui/icons-material/ListAlt';

export default function navbar() {
  return (
      <>
          <Box sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              maxWidth: "400px",
              width: "100%",
              borderRight: "2px solid rgba(255, 255, 255, 0.3)",
          }}>
              <Typography variant='h4' sx={{
                  p: 5,
                  fontWeight: "600"
              }}>Foody</Typography>

              <Box sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: 5
              }}>
                  <Box sx={{
                      display: "flex",
                      alignItems: "center",
                  }}>
                      <HomeIcon /> <Typography sx={{
                          fontSize: "24px"
                      }}>Home</Typography>

                  </Box>
                  <Box sx={{
                      display: "flex",
                      alignItems: "center",
                  }}>
                      <ExploreIcon /> <Typography sx={{
                          fontSize: "24px"
                      }}>Explore</Typography>
                  </Box>
                  <Box sx={{
                      display: "flex",
                      alignItems: "center",
                  }}>
                      <ListAltIcon /> <Typography sx={{
                          fontSize: "24px"
                      }}>Recipes</Typography>
                  </Box>
              </Box>
          </Box>
      </>
  )
}
