import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import PosthogProvider from './services/posthog/PosthogProvider';
import SentryProvider from './services/sentry/SentryProvider';
import { NODE_ENV, NodeEnv } from './utils/enums.util';
import { registerWebMCPTools } from './agent/webmcp';

const isProd = NODE_ENV === NodeEnv.PRODUCTION;

registerWebMCPTools();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {isProd ? (
            <SentryProvider>
                <PosthogProvider>
                    <App />
                </PosthogProvider>
            </SentryProvider>
        ) : (
            <App />
        )}
    </StrictMode>,
);
