import Head from 'next/head'
import MenuBar from './MenuBar'


const Layout = ({ children }) => {
    return (
    <>
        <Head>
            <meta name="author" content="Nick Ricciardelli" />
            <meta name="description" content="This is a rough draft of the final project for a movie search database interface" />
            <title>MovieDB</title>
            <link
                rel="stylesheet"
                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
            />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <MenuBar />
        {children}
       </>
    )
}

export default Layout
