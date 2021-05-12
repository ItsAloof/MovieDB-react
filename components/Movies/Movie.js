import { Card, CardContent, CardHeader, Grid, Typography, 
    CardMedia, CardActions, IconButton, Collapse, Box, Tooltip } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import clsx from 'clsx';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';
import Streaming from '../Streaming/Streaming';
import { getAPIUrl } from '../../utils/APIUrl';
import { formatDate, formatRuntime, number, currency, formatGenres } from '../../utils/Formatting';

const Movie = ({ movie, imgUrl }) => {
    const [streaming, setStreaming] = React.useState([]);
    const [expanded, setExpanded] = React.useState(false);
    const [enabled, setEnabled] = React.useState(false);
    const [fav, setFav] = React.useState(false);
    const itemName = process.env.ITEMNAME;


    const storeMovie = () =>
    {
        let movies = localStorage.getItem(itemName);
        if(movies === null)
        {
            var list = [];
            list.push(movie);
            localStorage.setItem(itemName, JSON.stringify(list));
            return;
        }else
        {
            movies = JSON.parse(movies);
            movies.push(movie);
            localStorage.setItem(itemName, JSON.stringify(movies));
            return;
        }
    }

    React.useEffect(() => {
        if(typeof localStorage !== 'undefined')
        {
            let list = localStorage.getItem(itemName);
            if(list !== null)
            {
                list = JSON.parse(list);
                for(let i in list)
                {
                    if(list[i].id === movie.id)
                    {
                        setFav(true);
                    }
                }
            }
        }
    }, []);

    const handleFavorite = (id) =>
    {
        if(typeof localStorage !== undefined)
        {
            if(fav)
            {
                let movies = JSON.parse(localStorage.getItem(itemName));
                movies = movies.filter(favMovie => favMovie.id !== movie.id);
                localStorage.setItem(itemName, JSON.stringify(movies));
            }else
            {
                storeMovie();
            }
            setFav(!fav);  
        }else{
            return;
        }
        
    }

    const handleExpand = async () => {
        setExpanded(!expanded);
        if(!expanded){
            const url = getAPIUrl(window.location.href, "/api/stream");
            const res = await axios.get(url, { params: { query: movie.id } });
            if(res.status === 200)
            {
                setStreaming(convertToArr(res.data));
            }else{
                return;
            }
        }
    }

    function convertToArr(data)
    {
        let arr = [];
        for(var i in data){
            arr.push({ site: i, link: data[i].us.link });
        }
        return arr;
    }

    if(movie.poster_path === null)
    {
        imgUrl = "./noimage.svg";
    }

    const theme = createMuiTheme({
        overrides: {
            MuiGrid: {
              root: {
                backgroundColor: '#212121'
              }
            }
          }
    });

    const style = createMuiTheme({
        palette: {
            primary: {
                main: '#ffffff'
            }
        },
        overrides: {
            MuiTooltip: {
                tooltip: {
                    fontSize: '1rem'
                }
            }
        }
    });
    
    return (
            <Grid item>
                <Card className="result" raised >
                    <ThemeProvider theme={style} >
                    <CardHeader  title={
                            <Tooltip title={movie.title} arrow interactive leaveDelay={500} placement="top">
                                <Box maxWidth="368px" component="div" textOverflow="ellipsis" >
                                    <Typography noWrap variant="h4" gutterBottom>
                                        {movie.title}
                                    </Typography>
                                </Box>
                            </Tooltip>}
                    
                    subheader={<><Typography variant="subtitle2" color="primary">Released: {formatDate(movie.release_date)} </Typography></>} />
                    </ThemeProvider>
                    <CardMedia><img src={imgUrl} height="600" width="400"/></CardMedia>
                    <CardContent>
                        <ThemeProvider theme={theme}>
                            <Grid container spacing={1} justify="center">
                                <Grid item xs={6} id="leftSide">
                                    <Typography variant="body2" component="p">Budget: {(movie.budget !== 0) ? (currency.format(movie.budget)) : ("Unknown")}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" component="p">Revenue: {(movie.revenue !== 0) ? (currency.format(movie.revenue)) : ("Unknown")}</Typography>
                                </Grid>
                                <Grid item xs={6} id="leftSide">
                                    <Typography variant="body2" component="p">Runtime: {formatRuntime(movie.runtime)}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" component="p">{formatGenres(movie.genres)}</Typography>
                                </Grid>
                                <Grid item xs={6} id="leftSide">
                                    <Typography variant="body2" component="p">Rating: {movie.vote_average}/10</Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="body2" component="p">Votes: {number.format(movie.vote_count)}</Typography>
                                </Grid>
                            </Grid>
                        </ThemeProvider>
                    </CardContent>
                    <CardActions >
                        <IconButton id={movie.id} aria-label="add to favorites" onClick={handleFavorite} >
                            <FavoriteIcon style={(fav) ? { color: 'red' } : { color: 'white' }} />
                        </IconButton>
                        <IconButton onClick={handleExpand} style={{marginRight: "0%", marginLeft: "auto", transition: "transform 0.25s"}} className={clsx({dropDown:!expanded}, {dropUp:expanded})}>
                            <ExpandMoreIcon style={{ color: 'white' }}/>
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            {(enabled) ? (<hr color="#2b2b2b" />) : <></>}
                            <ThemeProvider theme={theme}>
                                <Streaming key={movie.id + 1} services={streaming} isStreaming={setEnabled} />
                            </ThemeProvider>
                            <hr color="#2b2b2b" />
                            <Typography variant="h6" align="center">
                                Overview 
                            </Typography>
                            <Typography paragraph>{(movie.overview === "") ? "No overview available." : movie.overview}</Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>
    );
}

export default Movie
