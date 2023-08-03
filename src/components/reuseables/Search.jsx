import React from 'react'
import {
  Typography,
  Button,
  Input,
  IconButton,
  InputAdornment,
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search';

export default function search() {
  const [searchInput, setSearchInput] = React.useState("")

  return (
    <>
      <Input
        disableUnderline
        id="search"
        type="search"
        label="Search"
        placeholder='Search'
        value={searchInput}
        onChange={() => setSearchInput}
        startAdornment={
          <InputAdornment position='start'>
            <SearchIcon sx={{
              color: "#ffffff"
            }} />
          </InputAdornment>
        }
        autoComplete='off'
        sx={{
          backgroundColor: "rgba(255,255,255, 0.15)",
          color: "#ffffff",
          borderRadius: "25px",
          height: "3rem",
          pl: 2,
          width: "100%",
        }}
      />
    </>
  )
}
