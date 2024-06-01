export type Footer = {
    LINKS: FooterItem[]
}


export type FooterItem = {
    label: string
    link: string
}


export type SocialMediaLink = {
    link: string
    children: React.ReactNode
}