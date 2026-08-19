import { useContext, useEffect } from 'react';
import type { IAppContext, IUserContext } from '@/context/helpers/interface';
import UserContext from '@/context/user/userContext';
import AppContext from '@/context/app/appContext';

const useContextType = () => {
    const userContext = useContext<IUserContext>(UserContext);
    const appContext = useContext<IAppContext>(AppContext);

    useEffect(() => {}, []);

    return {
        userContext,
        appContext,
    };
};

export default useContextType;
