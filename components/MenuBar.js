import { AppBar, ButtonBase, IconButton, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import MenuIcon from '@material-ui/icons/Menu'
import { useRouter } from 'next/router'

const MenuBar = () => {
    const router = useRouter();
    function chooseColor(path)
    {
        return ((path === router.pathname) ? 'white' : 'gray');
    }
    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton edge="start">
                    <MenuIcon fontSize="large" />
                </IconButton>
                <ButtonBase disableRipple style={{ color: chooseColor('/'), marginRight: '10px'}} onClick={() => {router.push('/')}}>
                    <Typography variant="button">Home</Typography>
                </ButtonBase>
                <ButtonBase disableRipple style={{ color: chooseColor('/FavoriteMovies') }} onClick={() => {router.push('/FavoriteMovies')}}>
                    <Typography variant="button">Favorite Movies</Typography>
                </ButtonBase>
            </Toolbar>
        </AppBar>
    )
}

export default MenuBar
