import ArticleCard from '@/components/Features/BlogPosts/BlogPost';
import { articleService } from '@/services'
import { Article } from '@/type/article';
import dynamic from 'next/dynamic';
import React from 'react'

const PaginationWrapper = dynamic(() => import('./_parts/PaginationWrapper'), {
    loading: () => <p>Loading...</p>,
})

interface FetchArticleListResponse {
    data: Article[];
}

const Home = async ({ page }: { page: string }) => {
    const post: FetchArticleListResponse = await articleService.fetchArticleList(page as string);

    return (
        <>
            <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center gap-y-10 gap-x-14 mt-10 mb-5'>
                {
                    post?.data?.map((el, i) => (
                        <ArticleCard
                            key={i}
                            data={el}
                        />
                    ))
                }
            </div>
            <div className='my-10 flex justify-center'>
                <PaginationWrapper page={parseInt(page)} />
            </div>
        </>
    )
}

export default Home