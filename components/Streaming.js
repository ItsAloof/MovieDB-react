import { Grid, ButtonBase, Typography, createMuiTheme, ThemeProvider } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react'

const Streaming = ({ services }) => {
    const [hover, setHover] = React.useState(false);
    if(services.length === 0)
    {
       return(<></>); 
    }

    return (
        <>
            <Typography variant="h6" align="center" >Where to watch</Typography>
            <Grid style={{ marginBottom: '10px' }}>
                {(services.map((service) => (
                <Grid item >
                    <ThemeProvider theme={chooseTheme(service.site)}>
                        <ButtonBase onMouseOver={() => (setHover(true))} onMouseLeave={() => (setHover(false))}  href={service.link} >
                            <Typography color={(hover) ? "secondary" : "primary"} variant="button" component="p">{service.site}</Typography>
                        </ButtonBase>
                    </ThemeProvider> 
                </Grid>
                )))}
            </Grid>
        </>
        );
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

// function capChars(site)
// {
//     switch(site)
//     {
//         case 'hbo':
//             return 'HBO';
//         default:
//             return (site.charAt(0).toUpperCase() + site.slice(1));
//     }
// }

export default Streaming
