import type { IRoute } from '@/utils/interfaces.util';
import { RouteURL } from './paths';
import ErrorPage from '@/app/Error';
import { RouterErrorElement } from '@/components/base/common/error-boubdary';

const baseRoutes: Array<IRoute> = [
    {
        name: 'home',
        path: RouteURL.home,
        redirect: RouteURL.login,
    },
    {
        name: 'error',
		path: '*',
		element: <ErrorPage />,
		errorElement: <RouterErrorElement />,
	},
];

export default baseRoutes;
