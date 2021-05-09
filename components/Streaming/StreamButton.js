import React from 'react'
import { Grid, ButtonBase, Typography, createMuiTheme, ThemeProvider } from '@material-ui/core';


const StreamButton = ({ service }) => {
    const [hover, setHover] = React.useState(false);
    return (
        <Grid item>
            <ThemeProvider theme={chooseTheme(service.site)}>
                <ButtonBase onMouseOver={() => (setHover(true))} onMouseLeave={() => (setHover(false))}  href={service.link} >
                    <Typography color={(hover) ? "secondary" : "primary"} variant="button" component="p">{service.site}</Typography>
                </ButtonBase>
            </ThemeProvider> 
        </Grid>
    )
}

function chooseTheme(site)
{
    let colors;
    const size = '1.25rem';
    switch(site.toLowerCase())
    {
        case "netflix":
            colors = createMuiTheme({
                palette: {
                    primary: {
                        main: '#e50914',
                    },
                    secondary: {
                        main: '#33d6ff'
                    }
                },
                overrides: {
                    MuiTypography: {
                      button: {
                          fontSize: size
                      }
                    },
                  }
            });
            break;
        
        case 'hulu':  
            colors = createMuiTheme({
                palette: {
                    primary: {
                        main: '#36ca94'
                    },
                    secondary: {
                        main: '#33d6ff'
                    }
                },
                overrides: {
                    MuiTypography: {
                      button: {
                          fontSize: size
                      }
                    },
                  }
            });
            break;
        default:
            colors = createMuiTheme({
                palette: {
                    primary: {
                        main: '#ffffff'
                    },
                    secondary: {
                        main: '#33d6ff'
                    }
                },
                overrides: {
                    MuiTypography: {
                      button: {
                          fontSize: size
                      }
                    },
                  }
            });
    }
    return colors;
}
export default StreamButton
