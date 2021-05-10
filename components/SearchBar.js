import { useState } from 'react';
import { Paper, IconButton, InputBase, Divider, Container, Typography, ButtonBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'

const SearchBar = ({ onSearch, loading, clearMovies }) => {
    const [query, setQuery] = useState(""); 
    const [prevQuery, setPreQuery] = useState("");
    const [enabled, setEnabled] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!query)
        {
            return;
        }
        if(query === prevQuery)
        {
            return;
        }else
        {
            setPreQuery(query);
        }
        await onSearch(query);
        setEnabled(true);
    }

    const handleChange = (e) =>
    {
        setQuery(e.target.value);
    }

    const onClear = () =>
    {
        setEnabled(false);
        setPreQuery("");
        clearMovies();
    }

    return (
        <Container>
            <Typography variant="h5" component="p" style={{color: 'white'}}>Search MovieDB</Typography>
            <form onSubmit={handleSubmit}>
            <Paper className="searchBar" component="div">
                <InputBase readOnly={loading} id="search" className="search"
                    placeholder="Search..."
                    onChange={handleChange}
                />
                <IconButton disabled={loading} type="submit" onClick={handleSubmit}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </form>
        {(enabled) ? 
        <ButtonBase value="Clear Movies" onClick={onClear}>
          <Typography style={{color: 'white', marginTop: '10px'}} variant="body1" component="p">Clear Movies</Typography> 
        </ButtonBase> : <></>}
        
        </Container>
        
    )
}

export default SearchBar
