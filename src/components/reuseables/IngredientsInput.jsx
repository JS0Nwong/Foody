import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from "@mui/material/Box"

export default function IngredientsInput({ open, close, addIngredient }) {

    const [ingredient, setIngredient] = React.useState('')
    const [quantity, setQuantity] = React.useState('')

    const addItem = () => {
        addIngredient(ingredient, quantity);
        setIngredient('')
        setQuantity('')
        close()
    }

    return (
        <div>
            <Dialog open={open} onClose={close}>
                <Box sx={{
                    background: '#333',
                    color: "#fff"
                }}>

                    <DialogTitle sx={{
                        fontFamily: "Roboto"
                    }}>Ingredient</DialogTitle>
                    <DialogContent>
                        <DialogContentText sx={{
                            color: "#ccc"

                        }}>
                            Add an Ingredient
                        </DialogContentText>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            mt: 1,
                        }}>
                            <TextField
                                required
                                inputProps={{
                                    style: {
                                        color: "#fff"
                                    }
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: '#aaa'
                                    },
                                }}
                                autoFocus
                                autoComplete='off'
                                margin="dense"
                                id="name"
                                label="Quantity"
                                type="text"
                                variant="outlined"
                                sx={{
                                    mr: 2,
                                    fieldset: {
                                        borderColor: "#555"
                                    },
                                    "&:active fieldset": {
                                        borderColor: "red"
                                    },
                                    "&:label": {
                                        color: "#fff"
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#555"
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#555"
                                        },
                                    }

                                }}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                            <TextField
                                required
                                inputProps={{
                                    style: {
                                        color: "#fff"
                                    }
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: '#aaa'
                                    },
                                }}
                                autoFocus
                                autoComplete='off'
                                margin="dense"
                                id="name"
                                label="Ingredient"
                                type="text"
                                variant="outlined"
                                sx={{
                                    mr: 2,
                                    fieldset: {
                                        borderColor: "#555"
                                    },
                                    "&:active fieldset": {
                                        borderColor: "red"
                                    },
                                    "&:label": {
                                        color: "#fff"
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#555"
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#555"
                                        },
                                    }
                                }}
                                onChange={(e) => setIngredient(e.target.value)}
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={close}>Cancel</Button>
                        <Button onClick={addItem}>Add</Button>
                    </DialogActions>
                </Box>

            </Dialog>
        </div>
    )
}

