import { atom } from 'recoil';

const memberState = atom({
    key: 'payload',
    default: {
        name: '',
        email: '',
        status: '',
        gender: ''
    }
});

export default memberState;