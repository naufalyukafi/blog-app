"use client"
import Header from '@/components/Layout/Header/Header'
import InputLabelControl from '@/components/UI/InputLabel/indexControl'
import SingleSelectControl from '@/components/UI/Select/singleSelectControl'
import { userService } from '@/services'
import memberState from '@/store/member'
import { User } from '@/type/user'
import alert from '@/utils/alert'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Breadcrumbs, Typography, Button } from '@mui/material'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useRecoilState } from 'recoil'
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required('Project name is required'),
    email: yup.string().required('Email is required'),
    status: yup.string().required('Email is required'),
    gender: yup.string().required('Gender is required'),
});

const STATUS_OPTIONS = [
    {
        value: 'active',
        label: 'Active'
    },
    {
        value: 'inactive',
        label: 'Inactive'
    },
]

const GENDER_OPTIONS = [
    {
        value: 'male',
        label: 'Male'
    },
    {
        value: 'female',
        label: 'Female'
    },
]


const Edit = () => {
    const [payload, setPayload] = useRecoilState(memberState);
    const { id } = useParams()
    const router = useRouter()

    const methods = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    useEffect(() => {
        const fetchDetailUser = async () => {
            await userService.fetchDetailUser(id as string).then((response) => {
                const payloadDetail = response.data
                setPayload(payloadDetail)
                methods.setValue('name', payloadDetail?.name as string)
                methods.setValue('email', payloadDetail?.email as string)
                methods.setValue('gender', payloadDetail?.gender as string)
                methods.setValue('status', payloadDetail?.status as string)
            }).catch((err) => {
                console.error(err)
            })
        }
        fetchDetailUser()
    }, [id])

    const handleSubmit = () => {
        const payload = {
            name: methods.getValues('name'),
            email: methods.getValues('email'),
            status: methods.getValues('status'),
            gender: methods.getValues('gender')
        }

        userService.updateUser(id as string, payload).then(() => {
            alert.success(`Edit user ${payload?.name} success`)
            router.push('/member')
        }).catch((err) => {
            alert.failed('Error edit user ' + err.response.data[0].message);
        })
    };

    return (
        <Header>
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
                <Link href={'/member'}>Member</Link>
                <Typography variant='body2' color='text.primary' className='line-1 capitalize'>{payload.name}</Typography>
            </Breadcrumbs>
            <Box className="shadow-md w-full bg-white rounded-md min-h-80 p-2 mt-5">
                <FormProvider {...methods}>
                    <form className="flex flex-col gap-[16px] mb-3">
                        <Typography className="font-lato text-[20px] leading-[26px] font-semibold">
                            Edit Project
                        </Typography>
                        <Box className="mb-2">
                            <InputLabelControl
                                name={"name"}
                                label={"Name"}
                                required={true}
                                placeholder="Input name"
                            />
                        </Box>
                        <Box className="mb-2">
                            <InputLabelControl
                                name={"email"}
                                label={"Email"}
                                type="email"
                                required={true}
                                placeholder="Input email"
                            />
                        </Box>

                        <Box sx={{ mb: 1 }}>
                            <SingleSelectControl
                                name="status"
                                defaultValue="admin"
                                options={STATUS_OPTIONS}
                                placeholder="Choose status user"
                                label="Test Provider"
                                required={true}
                            // onChange={handleChangeProvider}
                            />
                        </Box>
                        <Box sx={{ mb: 1 }}>
                            <SingleSelectControl
                                name="gender"
                                defaultValue="admin"
                                options={GENDER_OPTIONS}
                                placeholder="Choose your gender"
                                label="Gender"
                                required={true}
                            // onChange={handleChangeProvider}
                            />
                        </Box>


                        <Button onClick={() => router.push('/member')} variant="outlined">
                            Cancel
                        </Button>
                        <Button
                            color="primary"
                            disabled={!methods.formState.isValid}
                            onClick={handleSubmit}
                            variant="contained"
                        >
                            Update
                        </Button>
                    </form>
                </FormProvider>
            </Box>
        </Header>
    )
}

export default Edit