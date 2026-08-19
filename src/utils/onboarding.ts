import { RouteURL } from '@/routes/paths';
import { UserType } from '@/utils/enums.util';

/**
 * Maps onboarding step and status to the appropriate accounts route.
 */
export function getOnboardingRoute(
    step: number,
    status: string,
    userType?: string,
): string {
    if (status === 'completed') {
        return RouteURL.myAccount;
    }

    switch (step) {
        case 0:
            return RouteURL.onboarding;
        case 1:
            return RouteURL.onboardingBasicInfo;
        case 2:
            if (userType === UserType.BUSINESS || userType === 'business') {
                return RouteURL.onboardingBusinessInfo;
            }
            return RouteURL.onboardingUserInfo;
        case 3:
            return RouteURL.onboardingCreateWorkspace;
        case 4:
            return RouteURL.onboardingInviteTeammates;
        default:
            return RouteURL.myAccount;
    }
}

export function getNextOnboardingRoute(
    currentStep: number,
    userType?: string,
): string {
    return getOnboardingRoute(currentStep + 1, 'in-progress', userType);
}

export function getPreviousOnboardingRoute(
    currentStep: number,
    userType?: string,
): string | null {
    if (currentStep <= 0) {
        return null;
    }

    if (currentStep === 3) {
        if (userType === UserType.BUSINESS || userType === 'business') {
            return RouteURL.onboardingBusinessInfo;
        }
        return RouteURL.onboardingUserInfo;
    }

    return getOnboardingRoute(currentStep - 1, 'in-progress', userType);
}
