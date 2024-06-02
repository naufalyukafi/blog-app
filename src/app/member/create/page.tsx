"use client"
import Header from '@/components/Layout/Header/Header'
import InputLabelControl from '@/components/UI/InputLabel/indexControl'
import SingleSelectControl from '@/components/UI/Select/singleSelectControl'
import { userService } from '@/services'
import { User } from '@/type/user'
import alert from '@/utils/alert'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Breadcrumbs, Typography, Button } from '@mui/material'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
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
    const router = useRouter()

    const methods = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });


    const handleSubmit = () => {
        const payload = {
            name: methods.getValues('name'),
            email: methods.getValues('email'),
            status: methods.getValues('status'),
            gender: methods.getValues('gender')
        }

        userService.createUser(payload).then(() => {
            alert.success(`Create user success`)
            router.push('/member')
        }).catch((err) => {
            alert.failed('Error create user ' + err.response.data[0].message);
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
                <Typography variant='body2' color='text.primary' className='line-1 capitalize'>Create Member</Typography>
            </Breadcrumbs>
            <Box className="shadow-md w-full bg-white rounded-md min-h-80 p-2 mt-5">
                <FormProvider {...methods}>
                    <form className="flex flex-col gap-[16px] mb-3">
                        <Typography className="font-lato text-[20px] leading-[26px] font-semibold">
                            Create Member
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
                                defaultValue="inactive"
                                options={STATUS_OPTIONS}
                                placeholder="Choose status user"
                                label="Status"
                                required={true}
                            />
                        </Box>
                        <Box sx={{ mb: 1 }}>
                            <SingleSelectControl
                                name="gender"
                                defaultValue="male"
                                options={GENDER_OPTIONS}
                                placeholder="Choose your gender"
                                label="Gender"
                                required={true}
                            />
                        </Box>


                        <Button onClick={() => router.push('/member')} variant="outlined">
                            Cancel
                        </Button>
                        <Button
                            color="primary"
                            variant="contained"
                            disabled={!methods.formState.isValid}
                            onClick={handleSubmit}
                        >
                            Create
                        </Button>
                    </form>
                </FormProvider>
            </Box>
        </Header>
    )
}

export default Edit