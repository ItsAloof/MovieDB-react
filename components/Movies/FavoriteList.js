import React from 'react';
import { Typography } from '@material-ui/core';
import MovieList from './MovieList';

const FavoriteList = ({ movies }) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w500/';
    const itemName = process.env.ITEMNAME;

    if(movies === undefined || movies.length === 0)
    {
        return (
            <Typography style={{ color: 'white', marginTop: '2%' }} variant="h3" align="center" component='p' >No favorite movies added yet.</Typography>
        );
    }

    return (
        <MovieList movies={movies} />
    );
}

export default FavoriteList
