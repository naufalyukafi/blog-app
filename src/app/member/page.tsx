import UserPostCard from '@/components/Features/UserPosts/UserPost'
import Header from '@/components/Layout/Header/Header'
import { userService } from '@/services';
import { User } from '@/type/user';
import { Button, Stack } from '@mui/material';
import React from 'react'
import SearchWrapper from './_parts/SearchWrapper';

interface FetchUserListResponse {
    data: User[];
}

const Member = async ({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const post: FetchUserListResponse = await userService.fetchUserList(searchParams.page as string);
    const search = searchParams.search as string;

    const filteredData = search && search.length > 0
        ? post?.data?.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
        : post?.data;
    return (
        <Header>
            <Stack flexDirection="row" className='gap-2 flex flex-wrap justify-end'>
                {/* <div> */}
                <SearchWrapper />
                <Button size="small" variant='contained'>New Member</Button>

                {/* </div> */}

            </Stack>
            <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-14 mt-10 mb-5'>
                {
                    filteredData?.map((el, i) => (
                        <UserPostCard
                            key={i}
                            data={el}
                        />
                    ))
                }
            </div>
            {/* <div className='my-10 flex justify-center'>
                <PaginationWrapper page={parseInt(page)} />
            </div> */}

        </Header>
    )
}

export default Member