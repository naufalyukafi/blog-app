import { Footer, SocialMediaLink } from '@/type/footer'
import { RiInstagramLine, RiTwitterXLine } from 'react-icons/ri'


export const NAVS: Footer = {
    LINKS: [
        { label: 'Home', link: '/' },
        { label: 'Machine Learning', link: '#!' },
        { label: 'Blokchain', link: '#!' },
        { label: 'Crypto', link: '#!' },
        { label: 'Web3', link: '#!' }
    ],
}


export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
    { link: '#!', children: <RiTwitterXLine /> },
    { link: '#!', children: <RiInstagramLine /> },
]