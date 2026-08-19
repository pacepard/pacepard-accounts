import type { IRoute } from '@/utils/interfaces.util';
import { RouteURL } from './paths';
import Login from '@/app/auth/Login';
import Register from '@/app/auth/Register';
import ActivateAccount from '@/app/auth/ActivateAccount';
import ForgotPassword from '@/app/auth/ForgotPassword';
import ResetPassword from '@/app/auth/ResetPassword';
import Verification from '@/app/auth/Verification';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import { getAppPages } from './pages';
import ErrorPage from '@/app/Error';

const accountRoutes: Array<IRoute> = [
    {
        name: 'register',
        path: RouteURL.register,
        element: <Register />,
    },
    {
        name: 'login',
        path: RouteURL.login,
        element: <Login />,
    },
    {
        name: 'verify-otp',
        path: RouteURL.verifyOtp,
        element: <Verification />,
    },
    {
        name: 'activate-account',
        path: RouteURL.activateAccount,
        element: <ActivateAccount />,
    },
    {
        name: 'forgot-password',
        path: RouteURL.forgotPassword,
        element: <ForgotPassword />,
    },
    {
        name: 'reset-password',
        path: RouteURL.resetPassword,
        element: <ResetPassword />,
    },
    {
        name: 'my-account-shell',
        path: RouteURL.myAccount,
        element: <DashboardLayout />,
        children: [
            {
                name: 'my-account',
                index: true,
                element: getAppPages('my-account'),
            },
            {
                name: 'profile',
                path: 'profile',
                element: getAppPages('profile'),
            },
            {
                name: 'security',
                path: 'security',
                element: getAppPages('security'),
            },
            {
                name: 'billing',
                path: 'billing',
                element: getAppPages('billing'),
            },
            {
                name: 'my-account-splat',
                path: '*',
                element: <ErrorPage />,
            },
        ],
    },
];

export default accountRoutes;
