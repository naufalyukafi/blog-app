
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

interface FetchDetailArticleCommentResponse {
    data: Article[];
}

const DetailArticle = async ({
    params,
    searchParams
}: {
    params: { id: string },
    searchParams?: { [key: string]: string | string[] | undefined }
}) => {
    let post;
    let profile;
    let comments;

    try {
        post = await articleService.fetchDetailArticle(params.id);
    } catch (error) {
        console.error('Error fetching article data:', error);
        post = { data: { title: 'Article Not Found', body: '<p>The article could not be found.</p>' } };
    }

    try {
        comments = await articleService.fetchDetailArticleComment(params.id) as FetchDetailArticleCommentResponse;
    } catch (error) {
        console.error('Error fetching article data:', error);
        post = { data: [] };
    }

    try {
        profile = await articleService.fetchDetailArticleProfile(searchParams?.user_id as string);
    } catch (error) {
        console.error('Error fetching profile data:', error);
        profile = { data: { name: 'Unknown Author', email: 'unknown@example.com' } };
    }

    console.log('comments ', comments)
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
                    <Link href={'/'}>Home</Link>
                    <Typography variant='body2' color='text.primary' className='line-1 capitalize'>{post.data.title}</Typography>
                </Breadcrumbs>

                <Typography variant='h1' mt={3} sx={{ fontSize: 30, fontWeight: 'bold', marginBottom: 2 }} className='capitalize'>{post.data.title}</Typography>

                <Box dangerouslySetInnerHTML={{ __html: post.data.body }} />

                <Box className="p-10 bg-slate-100 w-full min-h-28 mt-10 rounded-md flex items-center gap-2">
                    <Avatar>{profile.data.name[0]}</Avatar>
                    <Box>
                        <Typography variant='body2' color='text.primary' sx={{ fontSize: 18, fontWeight: 'bold' }} className='line-1 capitalize'>{profile.data.name}</Typography>
                        <Typography variant='body2' color='text.primary' className='line-1'>{profile.data.email}</Typography>
                    </Box>
                </Box>
                <Divider sx={{ marginTop: 5, borderBottomColor: '#00626C', borderBottomWidth: 5, marginBottom: 5 }} />
                {comments?.data?.map((el, i) => (
                    <Box key={i}>
                        <Box className="min-w-full mb-2 rounded-md flex items-center gap-2">
                            <Box className="w-full">
                                <Typography variant='body2' color='text.primary' sx={{ fontSize: 18, fontWeight: 'bold' }} className='line-1 capitalize'>{el.name}</Typography>
                                <Typography variant='body2' color='text.primary' className='line-1'>{el.body}</Typography>
                                <Divider sx={{ marginTop: 3 }} />
                            </Box>
                        </Box>
                    </Box>
                ))}

            </Stack>

        </Header >
    )
}

export default DetailArticle