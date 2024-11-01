import axiosClient from './axiosClient';

const register = async (body) => {
    console.log(body);
    return await axiosClient.post('auth/register', body);
};

const signIn = async (body) => {
    return await axiosClient.post('auth/login', body);
};
export { register, signIn };
