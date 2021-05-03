import axios from 'axios'
import baseUrl from '../utils/baseUrl'
import MovieList from '../components/MovieList'
import SearchBar from '../components/SearchBar'
import { useRouter } from 'next/router'
import React from 'react'
import { Container } from 'semantic-ui-react'
import clsx from 'clsx'


export default function Home() {
  const router = useRouter();
  const [movies, setMovies] = React.useState({ });
  const [loading, setLoading] = React.useState(false);

  


  return (
    <div id="root">
      <Container className="searchBar">
        <SearchBar onSearch={getMovies} loading={loading} isLoading={setLoading}/>
      </Container>
      <div>
        <div className={`ui ${clsx({active:loading}, {disabled:!loading})} loader`}></div>
        <MovieList loading={loading} movies={movies.props} />
      </div>
    </div>
  );


  async function getMovies(search)
  {
    setLoading(true);
    const moviesUrl = `${baseUrl}/search/movie`;
    const payload = { params: { api_key: `${process.env.API_KEY}`, query: search, include_adult: false } };
    const res = await axios.get(moviesUrl, payload);
    const data = res.data.results;
    let arr = [];
    for(let i in res.data.results)
    {
    const movieUrl = `${baseUrl}/movie/${data[i].id}?api_key=${process.env.API_KEY}`
      const movie = await (await axios.get(movieUrl)).data;
      arr[i] = movie;
    }
    setLoading(false);
    setMovies({ props: arr });
    router.push('/');
  }
}


