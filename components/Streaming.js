import { Grid, ButtonBase, Typography } from '@material-ui/core';
import React from 'react'

const Streaming = (services) => {
    if(services === undefined || services.length === 0)
    {
       return(<></>); 
    }
    console.log('Services: \n', services.services);
    return (
        <>
            <Typography align="center" >Where to watch</Typography>
            <Grid spacing={1} style={{ marginTop: '10px', marginBottom: '10px' }} alignItems="center">
                {(services.services.map((service) => (<ButtonBase href={service.link} ><Typography variant="h5" component="p">{(service.site).toUpperCase()}</Typography></ButtonBase>)))}
            </Grid>
        </>
        );
}

export default Streaming
