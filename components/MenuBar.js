import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import MenuIcon from '@material-ui/icons/Menu'

const MenuBar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton edge="start">
                    <MenuIcon fontSize="large" />
                </IconButton>
                <IconButton>
                    <HomeIcon fontSize="large" />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default MenuBar
