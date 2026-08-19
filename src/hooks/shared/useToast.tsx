import { useEffect } from 'react';
import useContextType from './useContextType';

const useToast = () => {
    const { userContext } = useContextType();
    const { toast, setToast, clearToast } = userContext;

    useEffect(() => {}, []);

    return {
        toast,
        setToast,
        clearToast,
    };
};

export default useToast;
