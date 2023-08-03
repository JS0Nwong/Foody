import React from 'react'
import {
    Typography,
    Rating,
    Input,
    Box,
    IconButton,
    Avatar,
    Divider,
    Button,
    ButtonGroup,
    InputAdornment,
    Checkbox
} from "@mui/material"

import { DataGrid } from '@mui/x-data-grid';


import ImageIcon from '@mui/icons-material/Image';
import MovieIcon from '@mui/icons-material/Movie';
import PollIcon from '@mui/icons-material/Poll';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';

import Editor from "./TextEditor"
import IngredientsInput from './IngredientsInput';
import { addRecipe, addReview } from "../utils/firestoreActions"


export default function PostModal({ close }) {

    const [postContent, setPostContent] = React.useState("")
    const [title, setPostTitle] = React.useState("")
    const [imageUpload, setImageUpload] = React.useState([])
    const [recipePostSwitch, setRecipePostSwitch] = React.useState(false)
    const [reviewPostSwitch, setReviewPostSwitch] = React.useState(true)
    const [imagePostSwitch, setImagePostSwitch] = React.useState(false)
    const [dragActive, setDragActive] = React.useState(false)
    const [charLimit, setCharLimit] = React.useState(0)
    const [imageLimit, setImageLimit] = React.useState(20)
    const [ingredients, setIngredients] = React.useState([])
    const [openIngredients, setOpenIngredients] = React.useState(false)

    const inputRef = React.useRef(null)

    const imageUploadHandler = (e) => {
        if (e.target.files) {
            if (e.target.files.length + imageUpload.length <= imageLimit) {
                const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
                setImageUpload((imageUpload) => imageUpload.concat(fileArray))
            }
        }
    }

    const removeImage = (key) => {
        setImageUpload(imageUpload.filter(item => item != key))
    }

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(e)
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        }
        if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    const handleFileDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false)

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            console.log(e.dataTransfer.files)
            const fileArray = Array.from(e.dataTransfer.files).map((file) => URL.createObjectURL(file))
            setImageUpload((imageUpload) => imageUpload.concat(fileArray))
        }
    }

    const updatePostTitle = (e) => {
        setCharLimit(e.target.value.length)
        setPostTitle(e.target.value)
    }

    const addIngredientToList = (ingredient, quantity) => {
        console.log(ingredient, quantity)
        const newIngredient = {
            ingredient: ingredient,
            quantity: quantity,
            isSelected: false,
            id: ingredients.length
        }
        const newIngredients = [...ingredients, newIngredient]
        setIngredients(newIngredients)
    }

    const handleSubmit = () => {

    }

    const handleSave = () => {


        
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'ingredient', headerName: 'Ingredient', width: 130 },
        {
          field: 'quantity',
          headerName: 'Quantity',
          type: 'number',
          width: 130,
        },
      ];

      

    return (
        <>
            <Box sx={{
                width: "100%",
                backgroundColor: "#000000",
                opacity: "75%",
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100%',
                display: {
                    xs: "none",
                    md: "block",
                },
            }}></Box>

            <Box sx={{
                position: 'fixed',
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#0A0A0C",
                width: {
                    xs: "100%",
                    sm: "100%",
                    md: "730px",
                },
                height: {
                    xs: "100%",
                    sm: "100%",
                    md: "800px",
                },
                borderRadius: "15px",
                p: 3,
                zIndex: 999,
                overflowY: "scroll",
                '&::-webkit-scrollbar': {
                    width: "3px",
                    height: "8px",
                },
                '&::-webkit-scrollbar-thumb': {
                    background: "#333",
                    borderRadius: "10px",
                    width: "5px"
                }
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    {/* USER INFORMATION GROUP */}
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Avatar>

                        </Avatar>
                        <Typography
                            fontFamily="Raleway"
                            fontWeight="700"
                            fontSize="16px"
                            sx={{
                                ml: 2
                            }}
                        >Post to</Typography>

                    </Box>
                    <IconButton onClick={close}>
                        <CloseIcon sx={{
                            color: "#FFFFFF"
                        }} />

                    </IconButton>
                </Box>

                {/* POST INFORMATION */}
                <Box sx={{}}>

                    <Typography
                        fontFamily="Raleway"
                        fontWeight="600"
                        fontSize="1.5rem"
                        sx={{
                            mt: 5,
                            color: "rgba(255,255,255,0.45)"
                        }}>What are you posting?</Typography>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        mt: 1
                    }}>

                        <Button
                            startIcon={<ReviewsIcon />}
                            disableRipple
                            sx={{
                                p: 2,
                                width: "100%",
                                fontFamily: "Raleway",
                                fontWeight: 500,
                                zIndex: 2,
                                borderBottom: reviewPostSwitch == true ? "1px solid rgba(255,255,255,0.95)" : "1px solid #555",
                                color: reviewPostSwitch == true ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.65)",
                                borderRadius: "0px",
                                background: reviewPostSwitch == true ? "rgba(255,255,255, 0.05)" : "none"

                            }}
                            onClick={() => {
                                setRecipePostSwitch(false)
                                setImagePostSwitch(false)
                                setReviewPostSwitch(true)
                            }}
                        >Review
                        </Button>


                        <Button
                            startIcon={<ListAltIcon />}
                            disableRipple
                            sx={{
                                p: 2,
                                width: "100%",
                                fontFamily: "Raleway",
                                fontWeight: 500,
                                borderLeft: "1px solid #555",
                                borderRight: "1px solid #555",

                                borderBottom: recipePostSwitch == true ? "1px solid rgba(255,255,255,0.95)" : "1px solid #555",
                                color: recipePostSwitch == true ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.65)",
                                borderRadius: '0px',
                                background: recipePostSwitch == true ? "rgba(255,255,255, 0.05)" : "none"

                            }}
                            onClick={() => {
                                setReviewPostSwitch(false)
                                setImagePostSwitch(false)
                                setRecipePostSwitch(true)
                            }}
                        >Recipe
                        </Button>

                        <Button
                            startIcon={<ImageIcon />}
                            disableRipple
                            sx={{
                                p: 2,
                                width: "100%",
                                fontFamily: "Raleway",
                                fontWeight: 500,
                                borderBottom: imagePostSwitch == true ? "1px solid rgba(255,255,255,0.95)" : " 1px solid #555",
                                color: imagePostSwitch == true ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.65)",
                                borderBottomLeftRadius: "0px",
                                borderBottomRightRadius: "0px",
                                background: imagePostSwitch == true ? "rgba(255,255,255, 0.05)" : "none"

                            }}
                            onClick={() => {
                                setImagePostSwitch(true)
                                setReviewPostSwitch(false)
                                setRecipePostSwitch(false)
                            }}
                        >Images & Video
                        </Button>
                    </Box>

                    <Input
                        placeholder='An Interesting Title'
                        inputProps={{
                            maxLength: 300,
                        }}
                        type='number'
                        multiline
                        disableUnderline
                        sx={{
                            color: "#FFFFFF",
                            mt: 2,
                            mb: 2,
                            pl: 2,
                            width: "100%",
                            overflow: "visible",
                            fontWeight: "600",
                            fontFamily: "Raleway",
                            fontSize: "2rem",
                            '& ::placeholder': {
                                fontWeight: "600",
                                fontFamily: "Raleway",
                                color: "#FFFFFF",
                                fontSize: "2rem",
                                pb: 2,
                            },
                            border: "1px solid #555",
                            borderRadius: "5px",
                        }}
                        resize="vertical"
                        autoComplete="off"
                        onChange={(e) => {
                            updatePostTitle(e);
                        }}
                        endAdornment={
                            <InputAdornment position='end'>
                                <Typography sx={{
                                    color: "#ccc",
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    fontSize: "12px",
                                    p: 1
                                }}>
                                    {charLimit} / 300
                                </Typography>
                            </InputAdornment>
                        }
                    />

                    {/* ADDITIONAL INFORMATION FOR RECIPES  */}

                    {recipePostSwitch === true ?

                        <Box>

                            <Typography
                                fontFamily="Raleway"
                                fontWeight="600"
                                fontSize="1.5rem"
                                sx={{

                                    color: "rgba(255,255,255,0.75)"
                                }}

                            >Quick Facts</Typography>

                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}>
                                    <Input
                                        disableUnderline
                                        placeholder="Prep Time"
                                        sx={{
                                            color: "#FFFFFF",
                                            mt: 2,
                                            mb: 2,
                                            pl: 2,
                                            overflow: "visible",
                                            fontWeight: "600",
                                            fontFamily: "Raleway",
                                            fontSize: "1rem",
                                            border: "1px solid #555",
                                            borderRadius: "5px",
                                        }}
                                        autoComplete="off"
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <Typography sx={{
                                                    fontFamily: "Raleway",
                                                    color: "rgba(255,255,255,0.45)",
                                                    fontWeight: "500",
                                                    fontSize: "1rem",
                                                    p: 1
                                                }}>
                                                    minutes
                                                </Typography>
                                            </InputAdornment>
                                        }
                                    />
                                    <Input
                                        disableUnderline
                                        placeholder="Cook Time"
                                        sx={{
                                            color: "#FFFFFF",
                                            p: 1,
                                            m: 2,
                                            overflow: "visible",
                                            fontWeight: "600",
                                            fontFamily: "Raleway",
                                            fontSize: "1rem",
                                            border: "1px solid #555",
                                            borderRadius: "5px",
                                        }}
                                        autoComplete="off"
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <Typography sx={{
                                                    fontFamily: "Raleway",
                                                    color: "rgba(255,255,255,0.45)",
                                                    fontWeight: "500",
                                                    fontSize: "1rem",
                                                    p: 1
                                                }}>
                                                    minutes
                                                </Typography>
                                            </InputAdornment>
                                        }
                                    />
                                    <Input
                                        disableUnderline
                                        placeholder="Serving Size"
                                        sx={{
                                            color: "#FFFFFF",
                                            pl: 2,
                                            mt: 2,
                                            mb: 2,
                                            overflow: "visible",
                                            fontWeight: "600",
                                            fontFamily: "Raleway",
                                            fontSize: "1rem",
                                            border: "1px solid #555",
                                            borderRadius: "5px",

                                        }}
                                        autoComplete="off"
                                    />
                                </Box>
                                <Input
                                    disableUnderline
                                    placeholder="Description (optional)"
                                    multiline
                                    rows={3}
                                    sx={{
                                        color: "#FFFFFF",
                                        mt: 2,
                                        mb: 2,
                                        pl: 2,
                                        pt: 2,
                                        overflow: "visible",
                                        fontWeight: "600",
                                        fontFamily: "Raleway",
                                        fontSize: "1rem",
                                        border: "1px solid #555",
                                        borderRadius: "5px",
                                        width: "100%"
                                    }}
                                    autoComplete="off"
                                />
                            </Box>

                            <Typography
                                fontFamily="Raleway"
                                fontWeight="600"
                                fontSize="1.5rem"
                                sx={{
                                    color: "rgba(255,255,255,0.75)"
                                }}>Nutritional Information</Typography>

                            <Box sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                                <Input
                                    disableUnderline
                                    placeholder="0"
                                    sx={{
                                        color: "#FFFFFF",
                                        m: 2,
                                        p: 2,
                                        ml: 0,
                                        overflow: "visible",
                                        fontWeight: "600",
                                        fontFamily: "Raleway",
                                        fontSize: "2rem",
                                        border: "1px solid #555",
                                        borderRadius: "5px",

                                    }}
                                    autoComplete="off"
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <Typography sx={{
                                                fontFamily: "Raleway",
                                                color: "rgba(255,255,255,0.45)",
                                                fontWeight: "500",
                                                fontSize: "1rem",
                                            }}>
                                                calories
                                            </Typography>
                                        </InputAdornment>
                                    }
                                />

                                <Input
                                    placeholder="0 g"
                                    disableUnderline
                                    sx={{
                                        color: "#FFFFFF",
                                        m: 2,
                                        p: 2,
                                        ml: 0,
                                        overflow: "visible",
                                        fontWeight: "600",
                                        fontFamily: "Raleway",
                                        fontSize: "2rem",
                                        border: "1px solid #555",
                                        borderRadius: "5px",
                                    }}
                                    autoComplete="off"
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <Typography sx={{
                                                fontFamily: "Raleway",
                                                color: "rgba(255,255,255,0.45)",
                                                fontWeight: "500",
                                                fontSize: "1rem",
                                            }}>
                                                protein
                                            </Typography>
                                        </InputAdornment>
                                    }
                                />

                                <Input
                                    placeholder="0 g"

                                    disableUnderline
                                    sx={{
                                        color: "#FFFFFF",
                                        m: 2,
                                        p: 2,
                                        ml: 0,
                                        overflow: "visible",
                                        fontWeight: "600",
                                        fontFamily: "Raleway",
                                        fontSize: "2rem",
                                        border: "1px solid #555",
                                        borderRadius: "5px",
                                    }}
                                    autoComplete="off"
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <Typography sx={{
                                                fontFamily: "Raleway",
                                                color: "rgba(255,255,255,0.45)",
                                                fontWeight: "500",
                                                fontSize: "1rem",
                                            }}>
                                                carbs
                                            </Typography>
                                        </InputAdornment>
                                    }
                                />

                                <Input
                                    placeholder="0 g"
                                    disableUnderline
                                    sx={{
                                        color: "#FFFFFF",
                                        m: 2,
                                        p: 2,
                                        ml: 0,
                                        mr: 0,
                                        overflow: "visible",
                                        fontWeight: "600",
                                        fontFamily: "Raleway",
                                        fontSize: "2rem",
                                        border: "1px solid #555",
                                        borderRadius: "5px",
                                    }}
                                    autoComplete="off"
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <Typography sx={{
                                                fontFamily: "Raleway",
                                                color: "rgba(255,255,255,0.45)",
                                                fontWeight: "500",
                                                fontSize: "1rem",
                                            }}>
                                                fat
                                            </Typography>
                                        </InputAdornment>
                                    }
                                />
                            </Box>

                            <Typography
                                fontFamily="Raleway"
                                fontWeight="600"
                                fontSize="1.5rem"
                                sx={{

                                    color: "rgba(255,255,255,0.75)"
                                }}>Ingredients
                            </Typography>

                            {ingredients.length != 0 ? <Box sx={{
                                borderRadius: "5px",
                                width: "100%",
                                mt: 2,
                                height: 420,
                            }}>
                                <DataGrid
                                    rows={ingredients}
                                    columns={columns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: { page: 0, pageSize: 5 },
                                        },
                                    }}
                                    pageSizeOptions={[5, 10]}
                                    checkboxSelection
                                    sx={{
                                        color: "#aaa",
                                        fontFamily: "Roberto",
                                        fontWeight: "400",
                                        "& .MuiDataGrid-checkboxInput": {
                                            color: '#aaa'
                                        },
                                        ".MuiDataGrid-columnHeader": {
                                            fontWeight: "600",
                                            fontFamily: "Roboto",
                                        },
                                        '.MuiDataGrid-columnSeparator': {
                                            display: 'none',
                                        },

                                    }}
                                />
                            </Box> :<></> }

                            <Button
                                variant='outlined'
                                sx={{
                                    mt: 2,
                                    mb: 2,
                                    width: "100%",
                                    fontFamily: "Raleway",
                                    fontWeight: "500",
                                }}
                                endIcon={<AddIcon />}
                                onClick={() => setOpenIngredients(true)}
                            >
                                Add Ingredient
                            </Button>

                            <Typography
                                fontFamily="Raleway"
                                fontWeight="600"
                                fontSize="1.5rem"
                                sx={{

                                    color: "rgba(255,255,255,0.75)"
                                }}>Directions</Typography>

                        </Box>

                        :

                        <></>}

                    {/* TEXT POST EDITOR */}

                    {imagePostSwitch === false
                        ? <Editor placeholder={
                            recipePostSwitch === false && reviewPostSwitch == true ? "Enter your review..." : "Enter the recipe directions..."
                        } /> : <></>
                    }

                    {/* IMAGE POST UPLOAD */}
                    {imagePostSwitch &&
                        <Box sx={{
                            height: imageUpload.length != 0 ? "auto" : "367px",
                            display: "flex",
                            justifyContent: "center",
                            border: "1px solid #555",
                            borderRadius: "5px",
                            position: "relative",
                        }}
                            onDragEnter={handleDrag}
                        >
                            {imageUpload.length != 0 ?
                                <Typography
                                    sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        right: 0,
                                        p: 2,
                                        color: "#ccc",
                                        fontFamily: "sans-serif",
                                        fontWeight: "500"
                                    }}>
                                    {imageUpload.length} / {imageLimit}</Typography> : <></>}

                            {/* IMAGE PREVIEWS */}

                            {imageUpload.length != 0 ?
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    mb: 2,
                                    mr: 0,
                                    ml: 2,
                                    alignItems: "flex-start",
                                    width: "100%",
                                    flexWrap: "wrap",
                                }}>

                                    {
                                        imageUpload.map((photo) => {
                                            return (
                                                <Box key={photo} sx={{
                                                    position: "relative",
                                                    mr: 2,
                                                    mt: 2
                                                }}>
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            height: 160,
                                                            width: 160,
                                                            maxHeight: {
                                                                xs: 233,
                                                                md: 167
                                                            },
                                                            maxWidth: {
                                                                xs: 233,
                                                                md: 250
                                                            },
                                                            borderRadius: "6px"
                                                        }}
                                                        src={photo}
                                                    >
                                                    </Box>
                                                    <IconButton
                                                        disableRipple
                                                        size='small'
                                                        sx={{
                                                            color: "#ffffff",
                                                            position: "absolute",
                                                            top: 0,
                                                            right: 0,
                                                            background: "#222",
                                                            m: 1
                                                        }}
                                                        onClick={() => removeImage(photo)}
                                                    >
                                                        <CloseIcon size="small" />
                                                    </IconButton>
                                                </Box>
                                            )
                                        })
                                    }

                                    {imageUpload.length != 20 ? <Box sx={{
                                        position: "relative",
                                    }}>
                                        <IconButton
                                            disableRipple
                                            variant="contained"
                                            component="label"
                                            sx={{
                                                background: "none",
                                                height: 160,
                                                width: 160,
                                                maxHeight: {
                                                    xs: 233,
                                                    md: 167
                                                },
                                                maxWidth: {
                                                    xs: 233,
                                                    md: 250
                                                },
                                                borderRadius: "6px",
                                                border: "2px dotted #555",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mt: 2,
                                                color: "#555",
                                                "&:hover": {
                                                    background: "none"
                                                }
                                            }}
                                        >
                                            <AddCircleOutlineIcon />
                                            <input
                                                type="file"
                                                multiple
                                                onChange={imageUploadHandler}
                                                hidden
                                                ref={inputRef}
                                                accept="image/png, image/jpeg"
                                            />
                                        </IconButton>
                                    </Box> : <></>}
                                </Box>

                                :

                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    height: '100%'
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        height: '100%'
                                    }}>
                                        <Typography sx={{ pr: 1 }}>Drag and drop an image or</Typography>
                                        <Button
                                            disableRipple
                                            variant="contained"
                                            component="label"
                                            sx={{
                                                background: "none",
                                                border: "1px solid #555",
                                                borderRadius: "5px",
                                                "&:hover": {
                                                    background: "none"
                                                }
                                            }}
                                        >
                                            Upload
                                            <input
                                                type="file"
                                                multiple
                                                onChange={imageUploadHandler}
                                                hidden
                                                ref={inputRef}
                                                accept="image/png, image/jpeg"
                                            />
                                        </Button>

                                    </Box>
                                </Box>
                            }
                            {dragActive && <div id="drag-file-element"
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleFileDrop}>
                            </div>}
                        </Box>
                    }

                </Box>

                <Divider sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    mt: 4
                }} />

                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    mt: 4
                }}>
                    <Button
                        variant="contained"
                        disableRipple
                        endIcon={<SaveIcon />}
                        sx={{
                            fontFamily: "Raleway",
                            fontWeight: "700",
                            fontSize: 16,
                            backgroundColor: "#F55C7B",
                            borderRadius: 10,
                            pl: "32px",
                            pr: "32px",
                            pt: "8px",
                            pb: "8px",
                            mr: 2,
                            '&:hover': {
                                backgroundColor: "#F55C7B",
                            }
                        }}
                        onClick={() => handleSave()}
                    >
                        Save as Draft
                    </Button>

                    <Button
                        variant="contained"
                        disableRipple
                        endIcon={<SendIcon />}
                        sx={{
                            fontFamily: "Raleway",
                            fontWeight: "700",
                            fontSize: 16,
                            backgroundColor: "#F55C7B",
                            borderRadius: 10,
                            pl: "32px",
                            pr: "32px",
                            pt: "8px",
                            pb: "8px",
                            '&:hover': {
                                backgroundColor: "#F55C7B",
                            }
                        }}
                        onClick={() => handleSubmit()}
                    >
                        Post
                    </Button>
                </Box>
            </Box>

            {openIngredients && <IngredientsInput
                open={openIngredients}
                close={() => setOpenIngredients(false)}
                addIngredient={addIngredientToList}
            />}
        </>
    )
}
