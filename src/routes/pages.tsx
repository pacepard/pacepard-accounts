import type { ReactElement } from 'react';
import Dashboard from '@/app/dashboard/Dashboard';
import Profile from '@/app/accounts/Profile';
import Security from '@/app/accounts/Security';
import Billing from '@/app/accounts/Billing';
import ErrorPage from '@/app/Error';

/** Pacepard-style name → page map (Accounts inventory only). */
export function getAppPages(name: string): ReactElement {
    switch (name) {
        case 'dashboard':
        case 'home':
        case 'my-account':
            return <Dashboard />;
        case 'profile':
            return <Profile />;
        case 'security':
            return <Security />;
        case 'billing':
            return <Billing />;
        default:
            return <ErrorPage />;
    }
}
