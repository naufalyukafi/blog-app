
import { articleService } from '@/services'
import { Article } from '@/type/article'
import { Avatar, Box, Breadcrumbs, Divider, Stack, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
const Header = dynamic(() => import('@/components/Layout/Header/Header'), {
    loading: () => <p>Loading...</p>,
})

interface FetchDetailArticleListResponse {
    data: Article;
}

const DetailArticle = async ({
    params
}: {
    params: { id: string }
}) => {
    const post: FetchDetailArticleListResponse = await articleService.fetchDetailArticle(params.id);
    return (
        <Header title={post.data.title}>
            <Stack component='article' className='section-spacing-mb'>
                {/* Breadcrumb */}
                <Breadcrumbs separator={<MdOutlineKeyboardArrowRight />} sx={{
                    marginTop: 2,
                    '.MuiBreadcrumbs-ol': {
                        overflow: 'hidden',
                        flexWrap: 'nowrap',
                        '.MuiBreadcrumbs-li': {
                            overflow: 'hidden'
                        }
                    }
                }}>
                    <Link color='inherit' href='/'>Home</Link>
                    <Typography variant='body2' color='text.primary' className='line-1 capitalize'>{post.data.title}</Typography>
                </Breadcrumbs>

                <Typography variant='h1' mt={3} sx={{ fontSize: 30, fontWeight: 'bold', marginBottom: 2 }} className='capitalize'>{post.data.title}</Typography>

                <Box dangerouslySetInnerHTML={{ __html: post.data.body }} />

                <Box className="p-10 bg-slate-100 w-full min-h-28 mt-10 rounded-md flex items-center gap-2">
                    <Avatar>H</Avatar>
                    <Box>
                        <Typography variant='body2' color='text.primary' sx={{ fontSize: 18, fontWeight: 'bold' }} className='line-1 capitalize'>Naufal Yukafi</Typography>
                        <Typography variant='body2' color='text.primary' className='line-1'>naufalyukafi10@gmail.com</Typography>
                    </Box>
                </Box>
                <Divider sx={{ marginTop: 5, borderBottomColor: '#00626C', borderBottomWidth: 5, marginBottom: 5 }} />
                <Box className="min-w-full mb-2 rounded-md flex items-center gap-2">
                    <Box className="w-full">
                        <Typography variant='body2' color='text.primary' sx={{ fontSize: 18, fontWeight: 'bold' }} className='line-1 capitalize'>Naufal Yukafi</Typography>
                        <Typography variant='body2' color='text.primary' className='line-1'>naufalyukafi10@gmail.com</Typography>
                        <Divider sx={{ marginTop: 3 }} />
                    </Box>
                </Box>
            </Stack>

        </Header >
    )
}

export default DetailArticle