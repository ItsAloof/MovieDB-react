import { Card, Modal } from 'semantic-ui-react';
import { Grid } from '@material-ui/core'
import Movie from './Movie';
import baseUrl from '../utils/baseUrl'
import axios from 'axios'

// import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

const MovieList = ( { movies } ) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w500/';


    if(!movies)
    {
        return (<></>);
    }
    
    return (
        <Grid className="results" container direction="row" justify="center">
            {movies.map(movie => (<Movie key={movie.id} movie={movie} imgUrl={imgUrl + movie.poster_path} />))}
        </Grid>
    )
}

export default MovieList
