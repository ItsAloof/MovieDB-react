import { Card, CardContent, CardHeader, Grid, Typography, CardMedia, CardActions, IconButton, Collapse, Divider, ButtonBase } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import clsx from 'clsx';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';
import Streaming from '../Streaming/Streaming';
import { getAPIUrl } from '../../utils/APIUrl';

const Movie = ({ movie, imgUrl }) => {
    const currency = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
    const [streaming, setStreaming] = React.useState([]);
    const [expanded, setExpanded] = React.useState(false);
    const [fav, setFav] = React.useState(false);
    const itemName = process.env.ITEMNAME;

    const formatDate = (date) => {
        if (date === "")
        {
            return ("No release date")
        }
        var arr = date.split("-");
        var newDate = arr[2] + "/" + arr[1] + "/" + arr[0];
        return newDate;
    }

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
        if(typeof localStorage !== 'undefined')
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
            if(res.status === 201 || res.data.streamingInfo === null)
            {
                return;
            }
            const info = res.data.streamingInfo;
            let arr = [];
            for(const i in info)
            {
                arr.push({ site: i, link: info[i].us.link});
            }
            setStreaming(arr);
        }
    }

    if(movie.poster_path === null)
    {
        imgUrl = "./noimage.png";
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
    
    return (
            <Grid item>
                <Card className="result" raised >
                    <CardHeader title={<Typography variant="h4" gutterBottom>{movie.title}</Typography>} disableTypography subheader={<><Typography variant="subtitle2">Released: {formatDate(movie.release_date)} </Typography></>} />
                    <CardMedia><img src={imgUrl} height="600" width="400"/></CardMedia>
                    <CardContent>
                        <ThemeProvider theme={theme}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Typography variant="body2" component="p">Budget: {(movie.budget !== 0) ? (currency.format(movie.budget)) : ("Unknown")}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" component="p">Revenue: {(movie.revenue !== 0) ? (currency.format(movie.revenue)) : ("Unknown")}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" component="p">Popularity: {movie.popularity}</Typography>
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
                            <hr color="#2b2b2b" />
                            <ThemeProvider theme={theme}>
                                <Streaming key={movie.id + 1} services={streaming} />
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
