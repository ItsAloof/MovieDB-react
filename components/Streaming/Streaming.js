import { Grid, ButtonBase, Typography, createMuiTheme, ThemeProvider } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react'
import StreamButton from './StreamButton'

const Streaming = ({ services }) => {
    if(services.length === 0)
    {
       return(<></>); 
    }

    return (
        <>
            <Typography variant="h6" align="center" >Where to watch</Typography>
            <Grid spacing={1} container direction="row">
                {(services.map((service) => (<StreamButton key={(Math.random()*10000)} service={service} />)))}
            </Grid>
        </>
        );
}

export default Streaming
