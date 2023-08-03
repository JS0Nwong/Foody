import React from 'react'
import {
    Card,
    CardContent,
    Typography,
    Rating,
    Box
} from '@mui/material'

import { BsPin } from 'react-icons/bs/index'
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function UserFeaturedPost() {
    return (
        <>
            <Card sx={{
                width: 180,
                height: 180,
                backgroundColor: "rgba(255,255,255, 0.05)",
                borderRadius: "8px",
                mr: 2,
                maxWidth: "100%",
                flexShrink: 0,
                flexBasis: "18%",
            }}>
                <CardContent sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "space-between"
                }}>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Typography
                            fontFamily="Raleway"
                            fontWeight="500"
                            fontSize="14px"
                            sx={{
                                opacity: "60%",
                                color: "#FFFFFF"
                            }}>
                            Review
                        </Typography>
                        <BsPin style={{
                            color: "#FF5555",
                            opacity: "78%",

                        }} />
                    </Box>

                    <Box sx={{
                        mb: 3
                    }}>
                        <Typography 
                            fontWeight="500"
                            fontFamily="Raleway"
                            fontSize="16px"
                            sx={{
                                opacity: "60%",
                                color: "#ffffff"
                            }}>10/03/24</Typography>
                        <Typography
                            fontFamily="Raleway"
                            fontWeight="700"
                            fontSize="20px"
                            noWrap
                            sx={{
                                color: "#FFFFFF",
                            }}
                        >
                            Gentlemen, it has been an honor playing with you tonight.

                        </Typography>
                        <Rating readOnly
                            precision={0.5}
                            emptyIcon={
                                <StarBorderIcon fontSize="inherit" sx={{
                                    color: "#ffffff",
                                    opacity: "60%",
                                }} />
                            }
                            sx={{
                                color: "#FFFFFF"
                            }}
                        />
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}
