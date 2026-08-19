import { useLocation, useNavigate } from 'react-router-dom';
import useContextType from './useContextType';
import storage from '@/services/storage';
import sidebarRoutes from '@/routes/sidebar.route';
import { RouteURL } from '@/routes/paths';
import type { IRouteItem } from '@/context/helpers/interface';
import type { RouteActionType } from '@/utils/types.util';

interface IToDetails {
    id?: string;
    route: string;
    name?: string;
    subroute?: string;
}

const useGoTo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { userContext } = useContextType();

    const { setSidebar } = userContext;

    const goTo = (url: string) => {
        if (url) {
            navigate(url);
        }
    };

    const toMainRoute = (e: any, name: string) => {
        if (e) {
            e.preventDefault();
        }

        const route = sidebarRoutes.find((x: IRouteItem) => x.name === name);

        if (route) {
            navigate(computePath(route.path || ''));

            setSidebar({
                route: route,
                subroutes: route.subroutes ? route.subroutes : [],
                inroutes: route.inroutes ? route.inroutes : [],
                collapsed: false,
                isOpen: true,
            });

            storage.keep('route.name', route.name);
        }
    };

    const toDetailRoute = (e: any, options: IToDetails) => {
        e.preventDefault();

        if (options.subroute) {
            storage.keep('route.subroute', options.subroute);

            const subroute = getRoute(options.route, options.subroute);
            if (subroute?.path) {
                goTo(subroute.path);
            }
        } else if (options.name) {
            const route = getRoute(options.route, options.name);
            if (route?.path) {
                const path = options.id
                    ? `${route.path}/${options.id}`
                    : route.path;
                goTo(path);
            }
        }
    };

    const computePath = (route: string) => {
        if (!route) {
            return RouteURL.myAccount;
        }
        if (route.startsWith('/')) {
            return route;
        }
        return `${RouteURL.myAccount}/${route}`;
    };

    const getSubroutes = (name: string): Array<IRouteItem> => {
        let result: Array<IRouteItem> = [];

        const route = sidebarRoutes.find((x: IRouteItem) => x.name === name);

        if (route && route.subroutes && route.subroutes.length > 0) {
            result = route.subroutes;
        }

        return result;
    };

    const getInRoutes = (name: string): Array<IRouteItem> => {
        let result: Array<IRouteItem> = [];

        const route = sidebarRoutes.find((x: IRouteItem) => x.name === name);

        if (route && route.inroutes && route.inroutes.length > 0) {
            result = route.inroutes;
        }

        return result;
    };

    const getRoute = (name: string, subroute?: string): IRouteItem => {
        let result: IRouteItem = { name: '' };
        const route = sidebarRoutes.find((x: IRouteItem) => x.name === name);

        if (subroute && route && route.subroutes && route.subroutes.length > 0) {
            const sub = route.subroutes.find(
                (m: IRouteItem) => m.name === subroute,
            );

            if (sub) {
                result = sub;
            }
        } else if (route) {
            result = route;
        }

        return result;
    };

    const getRouteAction = (action?: RouteActionType) => {
        const result: string = action ? action : 'navigate';
        return result;
    };

    return {
        goTo,
        navigate,
        computePath,
        toDetailRoute,
        toMainRoute,
        getSubroutes,
        getInRoutes,
        getRoute,
        getRouteAction,

        location,
    };
};

export default useGoTo;
