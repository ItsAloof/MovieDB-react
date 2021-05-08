import { createMuiTheme } from '@material-ui/core/styles'


const AppTheme = () => {
    const colors = createMuiTheme({
        palette: {
            primary: {
            main: '#212121',
            },
            secondary: {
            main: '#1b2aff',
            }
        },
    });

    const styles = createMuiTheme({
        palette: {
            primary: {
            main: '#212121',
            },
            secondary: {
            main: '#1b2aff',
            }
        },
        overrides: {
            MuiCard: {
              root: {
                backgroundColor: '#212121',
                color: '#ffffff'
              }
            },
            MuiGrid: {
              root: {
                backgroundColor: '#484848'
              }
            }
          }
    });
}

export default AppTheme