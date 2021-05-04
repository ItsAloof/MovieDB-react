import axios from 'axios'
import baseUrl from '../utils/baseUrl'
import MovieList from '../components/MovieList'
import SearchBar from '../components/SearchBar'
import { useRouter } from 'next/router'
import React from 'react'
import { Container } from 'semantic-ui-react'
import clsx from 'clsx'
import { ButtonBase } from '@material-ui/core'


export default function Home() {
  const router = useRouter();
  const [movies, setMovies] = React.useState({ });
  const [loading, setLoading] = React.useState(false);

  


  return (
    <div id="root">
      <Container className="searchBar">
        <SearchBar onSearch={getMovies} loading={loading} isLoading={setLoading}/>
        <ButtonBase value="Clear Movies" onClick={clearMovies} >

        </ButtonBase>
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
    clearMovies();
    const moviesUrl = 'http://localhost:3000/api/movies';
    const payload = { params: { api_key: `${process.env.API_KEY}`, query: search, include_adult: false } };
    const res = await axios.get(moviesUrl, payload);
    console.log(res);
    const data = res.data;
    setLoading(false);
    setMovies({ props: data });
    router.push('/');
  }

  function clearMovies()
  {
    console.log(movies);
    setMovies({ props: []})
    router.push('/');
  }
}


