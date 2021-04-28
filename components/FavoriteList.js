import React from 'react'
import Movie2 from './Movie2'
import { Grid, Typography } from '@material-ui/core'

const FavoriteList = (movies) => {
    const imgUrl = process.env.IMGURL;
    const itemName = process.env.ITEMNAME;
    const movieList = movies.movies;

    if(movies.movies === 'undefined')
    {
        return (
            <Typography variant="h1" component='p'>No favorite movies added yet</Typography>
        );
    }

    return (
        <Grid className="results" container direction="row" justify="center">
            {movieList.map((movie) => (<Movie2 key={movie.id} movie={movie} imgUrl={imgUrl + movie.poster_path} />))}
        </Grid>
    );
}

export default FavoriteList
