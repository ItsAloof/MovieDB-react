import { Typography } from '@material-ui/core';
import React from 'react'
import FavoriteList from '../components/FavoriteList'

const FavoriteMovies = () => {
    const [movies, setMovies] = React.useState({});
    const itemName = process.env.ITEMNAME;

    React.useEffect(() => {
        if(typeof localStorage !== undefined)
        {
            let list = localStorage.getItem(itemName);
            if(list !== null)
            {
                list = JSON.parse(list);
                setMovies({ movies: list });
                console.log('Movies', movies);
            }
        }
    }, []);

    const getMovies = () => 
    {
        if(typeof localStorage !== 'undefined')
        {
            const movies = localStorage.getItem(itemName);
            if(movies !== null)
            {
                return JSON.parse(movies);
            }
        }
    }

    if(movies === undefined)
    {
        return (
            <Typography variant="h2">
                No favorite movies added yet.
            </Typography>
        );
    }else{
        return (
        <FavoriteList movies={getMovies()} />
        );
    }
    
}

export default FavoriteMovies
