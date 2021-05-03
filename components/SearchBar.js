import { useState } from 'react';
import { Paper, IconButton, InputBase, Divider, Container, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!query)
        {
            return;
        }
        await onSearch(query);
    }

    const handleChange = (e) =>
    {
        setQuery(e.target.value);
    }

    return (
        <Container>
            <Typography variant="h5" component="p" style={{color: 'white'}}>Search MovieDB</Typography>
            <form onSubmit={handleSubmit}>
            <Paper className="searchBar" component="div">
                {/* <IconButton onClick={() => (setOpen(!open))}>
                    <ArrowDropDown />
                </IconButton>
                <Divider style={{marginLeft: "0px"}} orientation="vertical" variant="middle" flexItem /> */}
                <InputBase id="search" className="search"
                    placeholder="Search..."
                    onChange={handleChange}
                />
                <IconButton type="submit" onClick={handleSubmit}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </form>
        </Container>
        
    )
}

export default SearchBar
