import Link from 'next/link'
import { Box, Button, Container, Divider, Fab, Grid, Stack, Typography } from '@mui/material'
import { FooterItem } from '@/type/footer'
import { NAVS, SOCIAL_MEDIA_LINKS } from '@/config/navigation'

export default function Footer() {

    const createNavItems = (items: FooterItem[], heading: string) => {
        return (
            <Stack gap={2} className='ml-1'>
                <Typography variant='body1' component='h3' className='font-semibold ml-1'>{heading}</Typography>
                <Stack component='nav'>
                    {items.map((item, index) =>
                        <Button color='inherit' component={Link} href={item.link} className="text-[#6C737F] text-left justify-start py-2 capitalize" key={index}>{item.label}</Button>
                    )}
                </Stack>
            </Stack>
        )
    }


    return (
        <Stack component='footer' className='bg-slate-50'>
            <Stack component={Container} divider={<Divider />} className='pt-5'>
                <Box className="flex justify-between flex-wrap mb-16">
                    <Stack alignItems='start' gap={2} className='max-w-md font-semibold'>
                        Blog App
                        <Typography variant='body2' className='text-[#6C737F]'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quam inventore error fugiat, voluptatibus quasi explicabo earum possimus repellendus beatae dignissimos corporis accusantium necessitatibus similique repellat magni provident! Iusto, vitae?
                        </Typography>
                    </Stack>

                    {/* Links */}
                    <Grid item xs={12} sm={4} md={4} className="mt-4 md:mt-0">
                        {createNavItems(NAVS.LINKS, 'Links')}
                    </Grid>

                    {/* Follow Us */}
                    <Stack gap={2} className="mt-4 md:mt-0">
                        <Typography variant='body1' component='h3' className='font-semibold'>Follow Us</Typography>
                        <Stack direction='row' gap={1.5}>
                            {SOCIAL_MEDIA_LINKS.map((item, index) =>
                                <Fab rel='noopener noreferrer' aria-label='Social link' component={Link} href={item.link} className='text-[16px] text-white bg-blue-600 hover:bg-blue-900' key={index}>{item.children}</Fab>
                            )}
                        </Stack>
                    </Stack>
                </Box>


                {/* Copyright */}
                <Typography variant='body2' className="text-center py-2 text-[#6C737F]">&copy;{new Date().getFullYear()} Blog App. All right reserved</Typography>

            </Stack>
        </Stack>
    )
}