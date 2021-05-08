import baseUrl from '../../utils/baseUrl';
import Movie from '../../models/Movie'
import axios from 'axios';
import connectDb from '../../utils/connectDB';

export default async (req, res) => {
    connectDb();
    const params = req.query;

    const moviesUrl = `${baseUrl}/search/movie`;
    const payload = { params: { api_key: `${process.env.API_KEY}`, query: params.query, include_adult: params.include_adult } };
    const response = await axios.get(moviesUrl, payload);
    const data = response.data.results;
    let arr = [];
    for(let i in response.data.results)
    {
      const moviedb = await Movie.findOne( { id: data[i].id } );
      if(moviedb)
      {
        arr[i] = moviedb;
        continue;
      }else{
        const movieUrl = `${baseUrl}/movie/${data[i].id}?api_key=${process.env.API_KEY}`
        const movie = await (await axios.get(movieUrl)).data;
        addMovieToDB(movie);
        arr[i] = movie;
      }
    }

    res.status(200).json(arr);
}

async function addMovieToDB(data)
{
  const { id, title, release_date, overview , poster_path, budget, revenue, popularity } = data;
  const movie = await new Movie({
    id,
    title,
    release_date,
    overview,
    poster_path,
    budget, 
    revenue,
    popularity
  }).save();
}



