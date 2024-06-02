'use client';

import { FC } from 'react';
import { Box, TextField, TextFieldProps, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

type IFormInputProps = {
    name: string;
    rules?: any;
    maxLength?: number;
} & TextFieldProps;

const InputLabelControl: FC<IFormInputProps> = ({
    label,
    required = false,
    placeholder = '',
    type = 'text',
    className = '',
    defaultValue = '',
    name = '',
    rules = undefined,
    maxLength,
    ...props
}) => {

    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            defaultValue={defaultValue ?? ''}
            render={({ field: { onChange, value } }) => (
                <Box className={className}>
                    {
                        label === '' ? '' : (
                            <Typography
                                className={`font-semibold font-inter text-[12px] md:text-[12px] mb-1 ${!!errors[name] ? 'text-[#D32F2F]' : ''}  ${required ? 'required' : ''}`}
                            >
                                {label}
                            </Typography>
                        )
                    }
                    <TextField
                        type={type}
                        placeholder={placeholder}
                        variant='outlined'
                        fullWidth
                        size='small'
                        className='font-roboto text-[14px] placeholder:font-roboto'
                        value={value}
                        autoComplete='none'
                        onChange={(e) => onChange(e.target.value)}
                        name={name}
                        id={name}
                        error={!!errors[name]}
                        helperText={(errors[name]?.message ?? '').toString()}
                        inputProps={{ maxLength: maxLength }}
                        {...props}
                    />
                </Box>
            )}
        />
    );
};

export default InputLabelControl;