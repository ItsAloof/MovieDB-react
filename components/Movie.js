import { Modal, Button } from 'semantic-ui-react'
import { Card, makeStyles, Grid } from '@material-ui/core'
import React from 'react'

const Movie = ({ movie, imgUrl }) => {
    const [modal, setModal] = React.useState(false);

    const formatDate = (date) => {
        if (date === "")
        {
            return ("No release date")
        }
        var arr = date.split("-");
        var newDate = arr[2] + "/" + arr[1] + "/" + arr[0];
        return newDate;
    }
    if(movie.poster_path === null)
    {
        imgUrl = "./noimage.png";
    }
    
    return (
        <div className="column">
            <div className="ui fluid card">
                <div className="image">
                    <img src={imgUrl} height="720" width="500"/>
                </div>
                <div className="content">
                    <div className="header">{movie.title}</div>
                    <div className="meta">{formatDate(movie.release_date)}</div>
                    {/* <a onClick={() => setModal(true)} className="result description">{(movie.overview !== "") ? (movie.overview) : ("No description")}</a> */}
                </div>
            </div>
            <Modal open={modal} dimmer="blurring">
            <div className="ui fluid card">
                <div>
                    <img src={imgUrl} height="720" width="500"/>
                </div>
                <div className="content">
                    <div className="header">{movie.title}</div>
                    <div className="meta">{formatDate(movie.release_date)}</div>
                    <a onClick={() => setModal(true)} className="result description">{(movie.overview !== "") ? (movie.overview) : ("No description")}</a>
                </div>
                <Modal.Actions>
                    <Button content="Close" onClick={() => setModal(false)} />
                </Modal.Actions>
            </div>
                
            </Modal>
        </div>
    );
}

export default Movie
