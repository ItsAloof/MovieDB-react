import axios from 'axios';
import Movie from '../../models/Movie';
import connectDb from '../../utils/connectDB';
// import data from './test.json';

export default async (req, res) => {
    connectDb();

    
    const id = req.query.query;
    const filter = { id };
    const movie = await Movie.findOne(filter);
    if(movie === null)
    {
        await getStreamingInfo(req, res);
        return;
    }
    if(movie.streamingInfo === null)
    {
        const streamingInfo = await getStreamingInfo(req, res);
        
        await Movie.updateOne(filter, { streamingInfo }, {
            returnOriginal: false
        });
        return;
    }else {
        res.status(200).json(movie.streamingInfo);
    }
}


async function getStreamingInfo(req, res) {
    const params = req.query;
    const url = 'https://streaming-availability.p.rapidapi.com/get/basic';
        const payload = { params: { country: 'us', tmdb_id: `movie/${params.query}` }, headers: { 
            'x-rapidapi-key': process.env.STREAM_KEY,
            'x-rapidapi-host': 'streaming-availability.p.rapidapi.com' }};
        const response = await axios.get(url, payload).then(response => {
            if(response.data)
            {
                res.status(200).json(response.data);
            }
            return response.data;
        }).catch(error => {
            res.status(201).json(error.response.data);
            return null;
        });
        
}
