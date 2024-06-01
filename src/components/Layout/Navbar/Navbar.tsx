"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Button, Container, Stack, Drawer, IconButton, List, ListItemButton, ListItemText, ListItem, ListSubheader, Typography } from '@mui/material';
import { MdMenu } from 'react-icons/md';
import useScreenDetector from '@/hooks/useScreenDetector';

export const NAVS = [
    { label: 'Machine Learning', link: '#!' },
    { label: 'Blockchain', link: '#!' },
    { label: 'Crypto', link: '#!' },
    { label: 'Web 3', link: '#!' },

]


export default function Navbar() {
    const { isTablet, isMobile } = useScreenDetector();
    const [showMenu, setShowMenu] = useState(false);


    const handleMenu = (value: boolean) => {
        setShowMenu(value);
    };

    const renderDesktop = () => {
        return (
            <>
                <Stack direction='row' component='nav' className='m-0 p-0'>
                    {NAVS.map((item, index) =>
                        <Button
                            size='large'
                            sx={{
                                textTransform: 'capitalize',
                                py: 3
                            }}
                            className="text-black hover:bg-slate-100"
                            href={item.link}
                            component={Link}
                            key={index}
                        >{item.label}
                        </Button>
                    )}
                </Stack>
            </>
        );
    };
    const renderMobile = () => {
        return (
            <>
                <Stack justifyContent='center'>
                    <IconButton edge='end' aria-label='Menu' onClick={() => handleMenu(true)}>
                        <MdMenu />
                    </IconButton>
                </Stack>

                <Drawer open={showMenu} onClose={() => handleMenu(false)}>
                    <Stack component='nav' width='min(250px , 75vw)'>
                        <List subheader={<ListSubheader component='div'>Blog App</ListSubheader>}>
                            {NAVS.map((item, index) => <ListItem disablePadding key={index}>
                                <ListItemButton onClick={() => handleMenu(false)}>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                            )}
                        </List>
                    </Stack>
                </Drawer>
            </>
        );
    };


    return (
        <Stack component='header' className='shadow-sm'>
            <Stack direction="row" component={Container} className='flex justify-between items-center'>
                {/* Logo */}
                <Stack direction='row'>
                    <Link href="/">
                        <Typography variant="h1" sx={{ fontSize: '18px' }}>Blog App</Typography>
                    </Link>
                </Stack>

                {isMobile() ? renderMobile() : renderDesktop()}

            </Stack>
        </Stack>
    );
}
