import React from 'react'
import Movie from './Movie'
import { Grid, Typography } from '@material-ui/core'

const FavoriteList = (movies) => {
    const imgUrl = process.env.IMGURL;
    const itemName = process.env.ITEMNAME;
    const movieList = movies.movies;

    if(movieList === undefined || movieList.length === 0)
    {
        return (
            <Typography style={{ color: 'white', marginTop: '2%' }} variant="h3" align="center" component='p'>No favorite movies added yet.</Typography>
        );
    }

    return (
        <Grid className="results" container direction="row" justify="center">
            {movieList.map((movie) => (<Movie key={movie.id} movie={movie} imgUrl={imgUrl + movie.poster_path} />))}
        </Grid>
    );
}

export default FavoriteList
