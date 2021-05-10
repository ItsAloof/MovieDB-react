import baseUrl from '../../utils/baseUrl';
import Movie from '../../models/Movie'
import axios from 'axios';
import connectDb from '../../utils/connectDB';

export default async (req, res) => {
    connectDb();
    const { query, include_adult } = req.query;

    const moviesUrl = `${baseUrl}/search/movie`;
    const payload = { params: { api_key: `${process.env.API_KEY}`, query, include_adult } };
    const response = await axios.get(moviesUrl, payload);
    const { results } = response.data;
    let arr = [];
    for(let i in results)
    {
      const { id } = results[i];
      const moviedb = await Movie.findOne( { id } );
      if(moviedb)
      {
        arr[i] = moviedb;
        continue;
      }else{
        const movieUrl = `${baseUrl}/movie/${id}?api_key=${process.env.API_KEY}`
        const movie = await (await axios.get(movieUrl)).data;
        addMovieToDB(movie);
        arr[i] = movie;
      }
    }

    res.status(200).json(arr);
}

async function addMovieToDB(data)
{
  const { adult, backdrop_path, budget, homepage, 
      id, imdb_id, original_language, original_title, 
      title, overview, popularity, poster_path, release_date, 
      revenue, runtime, status, tagline, video,
      vote_average, vote_count, genres } = data;
  const movie = await new Movie({
    id,
    imdb_id,
    title,
    original_title,
    release_date,
    overview,
    poster_path,
    budget, 
    revenue,
    popularity,
    adult,
    backdrop_path,
    homepage,
    original_language,
    runtime,
    status,
    tagline,
    video,
    vote_average,
    vote_count,
    genres
  }).save();
}



