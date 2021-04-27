import { InputLabel, Select, Collapse } from '@material-ui/core'
import { useState } from 'react'


const Settings = ( expanded ) => {
    const [media, setMedia] = useState({ type: "Movie" });

    const handleChange = (e) =>
    {
        e.preventDefault();
        setMedia(e.target.value);
    }
    return (
        <>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <form>
                    <InputLabel htmlFor="media-type">Media Type</InputLabel>
                    <Select
                        variant="filled"
                        native
                        value={media.type}
                        onChange={handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'media-type'
                        }}
                        >
                            <option aria-label="None" value="" />
                            <option value={"Movie"}>Movies</option>
                            <option value={"Television"}>TV</option>
                        </Select>
                </form>
            </Collapse>
        </>
    )
}

export default Settings
