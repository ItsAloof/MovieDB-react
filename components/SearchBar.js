import { set } from 'mongoose';
import { useState } from 'react';
// import { Form, Input, Container, Button, Card } from 'semantic-ui-react'
import { Grid, Paper, IconButton, 
    InputBase, Divider, Button, 
    Card, CardActions, Collapse,
    CardContent, Typography, CardHeader, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import Settings from './Settings';

const SearchBar = ({ search, onSearch, isLoading, loading }) => {
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
            <form onSubmit={handleSubmit}>
            <Paper className="searchBar" component="div" square={open}>
                <IconButton onClick={() => (setOpen(!open))}>
                    <ArrowDropDown />
                </IconButton>
                <Divider style={{marginLeft: "0px"}} orientation="vertical" variant="middle" flexItem />
                <InputBase className="search"
                    placeholder="Search..."
                    onChange={handleChange}
                />
                <IconButton type="submit" onClick={handleSubmit}>
                    <SearchIcon />
                </IconButton>
            </Paper>
                <Collapse in={open}>
                    <Paper square>
                        <Divider style={{paddingTop: "1px"}} orientation="horizontal" flexItem />
                        <Typography variant="h5" component="p">Search Settings</Typography>
                    </Paper>
                </Collapse>
        </form>
        </Container>
        
    )

    
    // <form onSubmit={handleSubmit}>
    //     <Paper className="searchBar" component="div">
    //         <IconButton onClick={() => (setOpen(!open))}>
    //             <ArrowDropDown />
    //         </IconButton>
    //         <Divider orientation="vertical" variant="middle" flexItem />
    //         <InputBase className="search"
    //             placeholder="Search..."
    //             onChange={handleChange}
    //         />
    //         <IconButton type="submit" onClick={handleSubmit}>
    //             <SearchIcon />
    //         </IconButton>
    //     </Paper>
    // </form>

    // Version 2
    
    // <Container>
    //         <form onSubmit={handleSubmit}>
    //         <Paper className="searchBar" component="div">
    //             <IconButton onClick={() => (setOpen(!open))}>
    //                 <ArrowDropDown />
    //             </IconButton>
    //             <Divider orientation="vertical" variant="middle" flexItem />
    //             <InputBase className="search"
    //                 placeholder="Search..."
    //                 onChange={handleChange}
    //             />
    //             <IconButton type="submit" onClick={handleSubmit}>
    //                 <SearchIcon />
    //             </IconButton>
    //         </Paper>
    //             <Collapse in={open}>
    //                 <Paper square>
    //                     <Divider orientation="horizontal" flexItem variant="middle" />
    //                     <Typography variant="h5" component="p">Search Settings</Typography>
    //                 </Paper>
    //             </Collapse>
    //     </form>
    //     </Container>
}

export default SearchBar
