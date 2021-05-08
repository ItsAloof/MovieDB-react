import App from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppTheme from '../utils/AppTheme';



class MyApp extends App {

styles = createMuiTheme({
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
  
  render() {
    const { Component, pageProps } = this.props;
    return (
    <ThemeProvider theme={this.styles} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    );
  }
}

export default MyApp
