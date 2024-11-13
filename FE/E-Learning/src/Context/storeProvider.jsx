import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
// import { getInfo } from '@/apis/authService';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [userId, setUserId] = useState(Cookies.get('userId'));

    // console.log(userId);
    const handleLogOut = () => {
        Cookies.remove('token');
        Cookies.remove('userId');
        window.location.reload();
    };
    return (
        <StoreContext.Provider value={{ userId, handleLogOut, setUserId }}>
            {children}
        </StoreContext.Provider>
    );
};
