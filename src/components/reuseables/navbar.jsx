import React from 'react'
import {
    Box,
    Typography,
    Button,
    Avatar,
    IconButton,
    Divider
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import User from "./User"

export default function navbar( { openPostModal } ) {

    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const handleMenuOpen = (e) => {
        setAnchorEl(e.currentTarget)
    }
    const handleMenuClose = (e) => {
        setAnchorEl(null)
    }

    return (
        <>
            <Box sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                maxWidth: "400px",
                width: "100%",
                borderRight: "2px solid rgba(255, 255, 255, 0.3)",
            }}
            >
                <Box>
                    <Typography variant='h4' sx={{
                        p: 5,
                        fontWeight: "600",
                        fontFamily: "Raleway",
                        letterSpacing: "3px",
                    }}>F
                        <span style={{ color: "#F55C7B" }}>o</span>
                        <span style={{ color: "#F55C7B" }}>o</span>
                        dy.
                    </Typography>

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
                                fontSize: "24px",
                                fontFamily: "Raleway",
                                pl: 1,
                                fontWeight: "500"
                            }}>Home</Typography>

                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 2,
                            cursor: "pointer",

                        }}>
                            <ExploreIcon /> <Typography sx={{
                                fontSize: "24px",
                                fontFamily: "Raleway",
                                pl: 1,
                                fontWeight: "500"
                            }}>Explore</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 2,
                            cursor: "pointer",

                        }}>
                            <ListAltIcon /> <Typography sx={{
                                fontSize: "24px",
                                fontFamily: "Raleway",
                                pl: 1,
                                fontWeight: "500"
                            }}>Recipes</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 2,
                            cursor: "pointer",

                        }}
                        onClick={openPostModal}
                        >
                            <AddCircleOutlineIcon />
                            <Typography sx={{
                                fontSize: "24px",
                                fontFamily: "Raleway",
                                pl: 1,
                                fontWeight: "500"
                            }}>Create</Typography>
                        </Box>

                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 2,
                            color: "#ffffff",
                            cursor: "pointer",
                        }}
                        >
                            <PersonOutlineIcon />
                            <Typography sx={{
                                fontSize: "24px",
                                fontFamily: "Raleway",
                                pl: 1,
                                fontWeight: "500"
                            }}>Profile</Typography>
                        </Box>
                        
                    </Box>
                </Box>

                <Box sx={{
                    p: 5,
                }}>
                    {open && <Box
                        open={open}
                        onClose={handleMenuClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        sx={{
                            background: "rgba(255,255, 255, 0.05)",
                            borderRadius: "8px",
                            mb: 2
                        }}
                    >
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: 'flex-start',
                            width: '100%'
                        }}>
                            <IconButton
                                onClick={handleMenuClose}
                                sx={{
                                    color: "#ffffff",
                                    p: 2,
                                    width: "100%",
                                    borderRadius: "4px",
                                    '&:hover': {
                                        background: "#333"
                                    }
                                }}
                            >
                                <SettingsIcon />
                                <Typography sx={{
                                    fontFamily: "Raleway",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    pl: 1
                                }}>Settings</Typography>
                            </IconButton>

                            <IconButton
                                onClick={handleMenuClose}
                                sx={{
                                    color: "#ffffff",
                                    p: 2,
                                    width: "100%",
                                    borderRadius: "4px",
                                    '&:hover': {
                                        background: "#333",
                                    }
                                    
                                }}
                            >
                                <BookmarkBorderIcon />
                                <Typography sx={{
                                    fontFamily: "Raleway",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    pl: 1
                                }}>Saved</Typography>

                            </IconButton>

                            <Divider sx={{ color: "white" }}/>

                            <IconButton
                                onClick={handleMenuClose}
                                sx={{
                                    color: "#ffffff",
                                    p: 2,
                                    width: "100%",
                                    borderRadius: "4px",
                                    '&:hover': {
                                        background: "#333"
                                    }
                                }}
                            >
                                <LogoutIcon />
                                <Typography sx={{
                                    fontFamily: "Raleway",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    pl: 1
                                }}>Log out</Typography>
                            </IconButton>
                        </Box>
                    </Box>}
                    <IconButton
                        disableRipple
                        sx={{
                            color: "#ffffff",
                            m: 0,
                            p: 0,
                        }}
                        onClick={handleMenuOpen}

                    >
                        <MoreHorizIcon />
                        <Typography sx={{
                            fontSize: "24px",
                            fontFamily: "Raleway",
                            pl: 1,
                            fontWeight: "500"
                        }}>More</Typography>
                    </IconButton>
                </Box>
            </Box>
        </>
    )
}
