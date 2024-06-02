"use client";
import ModalDelete from '@/app/member/_parts/ModalDelete'
import memberState from '@/store/member';
import { User } from '@/type/user'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useRecoilState } from 'recoil';

const UserPostCard = ({ data }: { data: User }) => {
    const [payload, setPayload] = useRecoilState(memberState);

    const [modalDelete, setModalDelete] = useState(false)
    const router = useRouter()
    return (
        <div className='shadow-lg hover:shadow-2xl p-5 relative min-h-72 w-full'>
            <div className="flex items-center  p-3 rounded-md ">
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Name: {data.name}
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white capitalize">
                        Gender: {data.gender}
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white capitalize">
                        Status: {data.status}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate ">
                        Email: {data.email}
                    </p>
                </div>


            </div>
            <div className="flex items-center space-x-2 absolute bottom-2 right-2">
                <IconButton onClick={() => router.push(`/member/edit/${data.id}`)}><FaEdit /></IconButton>
                <IconButton><FaTrash onClick={() => {
                    setModalDelete(true)
                    setPayload(data)
                }} /></IconButton>
            </div>
            <ModalDelete
                data={payload}
                open={modalDelete}
                setOpen={setModalDelete}
                onSuccessSubmit={() => {

                }}
            />
        </div>

    )
}

export default UserPostCard
