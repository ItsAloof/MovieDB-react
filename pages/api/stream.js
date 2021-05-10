import axios from 'axios';
import Movie from '../../models/Movie';
import connectDb from '../../utils/connectDB';

export default async (req, res) => {
    connectDb();

    
    const id = req.query.query;
    const filter = { id };
    const movie = await Movie.findOne(filter);

    if(movie === null)
    {
        res.status(204);
        return;
    }else if(movie){
        if(movie.streamingInfo !== null)
        {
            res.status(200).json(movie.streamingInfo);
            return;
        }else{
            const response = await getStreamingInfo(req)
            .catch(error => {
                console.log(error);
                res.status(429);
                return error;
            });

            if(response.status === 200)
            {
                const { streamingInfo } = response.data;
                res.status(200).json(streamingInfo);
                await Movie.updateOne(filter, { streamingInfo }, {
                    returnOriginal: false
                });
                return;
            }else{
                res.status(400).send("Bad Request");
                return;
            }
        }
    }
}


async function getStreamingInfo(req) {
    const params = req.query;
    const url = 'https://streaming-availability.p.rapidapi.com/get/basic';
    const payload = { params: { country: 'us', tmdb_id: `movie/${params.query}` }, headers: { 
        'x-rapidapi-key': process.env.STREAM_KEY,
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com' }};
    const response = await axios.get(url, payload).catch(error => {
        return error;
    });
    return response;
}
