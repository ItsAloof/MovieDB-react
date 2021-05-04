import baseUrl from '../../utils/baseUrl';
import axios from 'axios';

export default async (req, res) => {
    const params = req.query;

    const moviesUrl = `${baseUrl}/search/movie`;
    const payload = { params: { api_key: `${process.env.API_KEY}`, query: params.query, include_adult: params.include_adult } };
    const response = await axios.get(moviesUrl, payload);
    const data = response.data.results;
    let arr = [];
    for(let i in response.data.results)
    {
    const movieUrl = `${baseUrl}/movie/${data[i].id}?api_key=${process.env.API_KEY}`
      const movie = await (await axios.get(movieUrl)).data;
      arr[i] = movie;
    }
    res.status(200).json(arr);
}

