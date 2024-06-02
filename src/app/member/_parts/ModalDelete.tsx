import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import { User } from '@/type/user';
import { userService } from '@/services';
import alert from '@/utils/alert';


interface ModalDeleteInterface {
    open: boolean
    setOpen: any
    onSuccessSubmit: any,
    data?: User | null | undefined
};


const ModalDelete = ({ data, open, setOpen, onSuccessSubmit }: ModalDeleteInterface) => {
    const handleClose = () => {
        setOpen(false);
    };

    const onDelete = () => {
        userService.deleteUser(data?.id as string).then(() => {
            alert.success(`Delete user ${data?.name} success`)
        }).catch((err) => {
            alert.failed('Error deleting user ' + err.response.data[0].message);
        }).finally(() => {
            setOpen(false);
        })
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            sx={{
                '& .MuiDialog-container': {
                    '& .MuiPaper-root': {
                        width: {
                            xs: '100%',
                            md: '100%'
                        },
                        maxWidth: {
                            xs: '444px',
                            md: '444px'
                        },
                        margin: {
                            xs: 'auto'
                        },
                    },
                },
            }}
        >
            <DialogTitle id="dialog-confirm-archive-title">
                <Typography className='font-lato text-[20px] leading-[26px] font-semibold'>Delete User</Typography>
            </DialogTitle>
            <DialogContent>
                <Typography className='text-[16px] leading-[22px] text-[#000]'>
                    {`Are you sure you want to delete ${data?.email}`}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant='outlined'>
                    Cancel
                </Button>
                <Button
                    onClick={onDelete}
                    color='error'
                // disabled={(methods.watch('pk_ms_exam_detail') ?? []).length === 0}
                >
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ModalDelete;