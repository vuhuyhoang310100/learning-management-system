import axiosClient from './axiosClient';

const register = async (body) => {
    // console.log(body);
    return await axiosClient.post('auth/user/register', body);
};

const signIn = async (body) => {
    return await axiosClient.post('auth/user/login', body);
};

// const getInfo = async (userId) => {
//     return await axiosClient.get(`auth/register/${userId}`);
// };
export { register, signIn };
