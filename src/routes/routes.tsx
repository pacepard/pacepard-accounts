import { Navigate, Route, Routes } from 'react-router-dom';
import type { IRoute } from '@/utils/interfaces.util';
import accountRoutes from './account.route';
import onboardingRoutes from './onboarding.route';
import baseRoutes from './base.route';
import learnRoutes from './learn.route';
import pathfinderRoutes from './pathfinder.route';

const appRoutes: Array<IRoute> = [
    ...accountRoutes,
    ...onboardingRoutes,
    ...baseRoutes,
    ...learnRoutes,
    ...pathfinderRoutes,
];

function renderRoutes(routes: Array<IRoute>) {
    return routes.map((route) => {
        const element =
            route.element ??
            (route.redirect ? (
                <Navigate to={route.redirect} replace />
            ) : (
                <Navigate to="/" replace />
            ));

        if (route.index) {
            return <Route key={route.name} index element={element} />;
        }

        return (
            <Route key={route.name} path={route.path!} element={element}>
                {route.children ? renderRoutes(route.children) : null}
            </Route>
        );
    });
}

function MainRoutes() {
    return <Routes>{renderRoutes(appRoutes)}</Routes>;
}

export default MainRoutes;
