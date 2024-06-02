'use client';

import React from 'react';
import { Box, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface SingleSelectControlInterface {
    label: string,
    placeholder: string,
    name: string,
    defaultValue?: string | number | undefined | null,
    options: any[],
    onChange?: any,
    sx?: any,
    required?: boolean,
    disabled?: boolean,
}

const SingleSelectControl = ({
    label,
    placeholder = '',
    name = '',
    defaultValue = '',
    options,
    onChange = undefined,
    sx = undefined,
    required = false,
    disabled = false,
}: SingleSelectControlInterface) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
                <Box>
                    {
                        label === '' ? '' : (
                            <Typography
                                className={`font-semibold font-inter text-[12px] mb-1 ${disabled ? 'text-gray-400' : ''} ${!!errors[name] ? 'text-[#D32F2F]' : ''}  ${required ? 'required' : ''}`}
                            >
                                {label}
                            </Typography>
                        )
                    }
                    <Select
                        {...field}
                        disabled={disabled}
                        variant='outlined'
                        className='font-roboto text-[14px] placeholder:font-roboto'
                        size='small'
                        renderValue={(selected) => {
                            if (selected.length === 0) {
                                return <Typography className=''>{placeholder}</Typography>;
                            }

                            return options.find((val: any) => val.value == selected)?.label ?? '';
                        }}
                        id={`${name}`}
                        placeholder={placeholder}
                        inputProps={{ 'aria-label': 'Without label' }}
                        onChange={(e) => {
                            field.onChange(e.target.value);

                            if (onChange) {
                                onChange(e.target.value);
                            }
                        }}
                        sx={{
                            '&.MuiInputBase-root.MuiOutlinedInput-root': {
                                width: '100%'
                            },
                            ...(sx ?? {})
                        }}
                    >
                        {
                            (options ?? []).map((val, key) => (
                                <MenuItem value={val?.value} key={key} className='flex flex-row gap-[4px]'>
                                    {
                                        val?.icon ? (val?.icon) : ''
                                    }
                                    {val?.label}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </Box>
            )}
        />
    );
};

export default SingleSelectControl;