import Head from 'next/head'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Box, Container } from '@mui/material'

interface HeaderProps {
    children: React.ReactNode,
    header?: boolean
    footer?: boolean
    title?: string | false
}


export default function Header({ title, header = true, footer = true, children }: HeaderProps) {

    return <>
        <Head>
            <title>{title ? `${title} | Blog App` : 'Blog App - Global News'}</title>
        </Head>

        {header !== false && <Navbar />}
        <Box component='main' flex={1} className="min-h-screen mx-auto mt-4">
            <Container>
                {children}
            </Container>
        </Box>
        {footer !== false && <Footer />}

    </>
}