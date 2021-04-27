import { Card, Modal } from 'semantic-ui-react';
import Movie from './Movie'
import { Grid } from '@material-ui/core'
import Movie2 from './Movie2';
import baseUrl from '../utils/baseUrl'
import axios from 'axios'

// import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

const MovieList = ( { movies, getMovieDetails } ) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w500/';

    async function getMovieDetails(id)
    {
        const url = `${baseUrl}/movie/${id}?api_key=${process.env.API_KEY}`
        const res = await axios.get(url);
        return res.data;
    }


    if(!movies)
    {
        return (<></>);
    }
    
    return (

        // <div className="results">
        //     <div className="ui five column grid">
        //         {movies.map(movie => (<Movie2 key={movie.id} movie={movie} imgUrl={imgUrl + movie.poster_path}/>))}
        //     </div>
        // </div>

        <>
            <Grid className="results" container direction="row" justify="center">
                {movies.map(movie => (<Movie2 key={movie.id} movie={movie} imgUrl={imgUrl + movie.poster_path} movieDetails={getMovieDetails(movie.id)}/>))}
            </Grid>
            {/* <div className="results">
               <div className="ui five column grid">
                   {movies.map(movie => (<Movie key={movie.id} movie={movie} imgUrl={imgUrl + movie.poster_path}/>))}
               </div>
           </div> */}
        </>
    )
}

export default MovieList
