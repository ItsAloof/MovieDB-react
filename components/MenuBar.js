import { AppBar, ButtonBase, IconButton, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import MenuIcon from '@material-ui/icons/Menu'
import useRouter from 'next/router'

const MenuBar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton style={{color: 'white'}} edge="start">
                    <MenuIcon fontSize="large" />
                </IconButton>
                <IconButton style={{color: 'white'}} onClick={() => {useRouter.push('/')}}>
                    <HomeIcon fontSize="large" />
                </IconButton>
                <ButtonBase onClick={() => {useRouter.push('/FavoriteMovies')}}>
                    <Typography variant="button">Favorite Movies</Typography>
                </ButtonBase>
            </Toolbar>
        </AppBar>
    )
}

export default MenuBar
