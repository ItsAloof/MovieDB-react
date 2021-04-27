import { Container } from 'semantic-ui-react'
import HeadContent from './HeadContent'
import Head from 'next/head'
import { Children } from 'react'
import MenuBar from './MenuBar'


const Layout = ({ children }) => {
    return (
    <>
        <Head>
            <HeadContent />
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
