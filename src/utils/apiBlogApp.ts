import axios from 'axios';
import localUser from './localUser';

const apiBlogApp = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/public/v2`,
});

// Add a request interceptor
apiBlogApp.interceptors.request.use(function (config) {
    const token = process.env.NEXT_PUBLIC_TOKEN;

    if ((token ?? '').length > 0) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, function (error) {
    return Promise.reject(error);
});

apiBlogApp.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    const isRequestVerifyToken = /api\/token/.test(error?.request?.responseURL);
    if (!isRequestVerifyToken && error?.response?.status === 401) {
        localUser.remove();
        window.location.href = '/';
        throw new Error('failed authentication');
    }

    return Promise.reject(error);
});

export default apiBlogApp;