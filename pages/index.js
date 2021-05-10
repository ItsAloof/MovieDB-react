import axios from 'axios';
import MovieList from '../components/Movies/MovieList';
import SearchBar from '../components/SearchBar';
import { useRouter } from 'next/router';
import React from 'react';
import { Container } from 'semantic-ui-react';
import clsx from 'clsx';
import { getAPIUrl } from '../utils/APIUrl';


export default function Home() {
  const router = useRouter();
  const [movies, setMovies] = React.useState({ });
  const [loading, setLoading] = React.useState(false);

  


  return (
    <div id="root">
      <Container className="searchBar">
        <SearchBar disabled={loading} onSearch={getMovies} loading={loading} isLoading={setLoading} clearMovies={clearMovies} />
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
    let moviesUrl = getAPIUrl(window.location.href, "/api/movies");
    const payload = { params: { query: search, include_adult: false } };
    const res = await axios.get(moviesUrl, payload);
    const data = res.data;
    setLoading(false);
    setMovies({ props: data });
  }

  function clearMovies()
  {
    setMovies({ props: []})
  }
}
