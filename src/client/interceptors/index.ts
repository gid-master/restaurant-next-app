import axios from 'axios';
import { useCookie } from '@/client/utils/StorageUtil';
import { useRouter } from 'next/router';

axios.defaults.baseURL = '../api';

axios.interceptors.request.use(async (request) => {
    const token: string = await useCookie.getItem('authentication');

    if (token) {
        request.headers = {
            ...request.headers,
            Authorization: `Bearer ${token}`
        };
    }

    return request;
});

axios.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.log('interceptor error');
        // console.log(error);
        // 504 still allow offline mode to run the API's
        if (error.response.status !== 504) {
            const navigation = useRouter();
            navigation.push('/fallback');
        }

        return Promise.reject(error.response.data);
    }
);

export default axios;
