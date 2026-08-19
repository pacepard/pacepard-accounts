import type { IRouteItem } from '@/context/helpers/interface';
import { RouteURL } from './paths';

const sidebarRoutes: Array<IRouteItem> = [
    {
        name: 'my-account',
        path: RouteURL.myAccount,
        title: 'Home',
        subroutes: [
            { name: 'profile', path: RouteURL.profile, title: 'Profile' },
            { name: 'security', path: RouteURL.security, title: 'Security' },
            { name: 'billing', path: RouteURL.billing, title: 'Billing' },
        ],
        inroutes: [],
    },
];

export default sidebarRoutes;
