export enum NodeEnv {
    LOCAL = 'local',
    DEVELOPMENT = 'development',
    STAGING = 'staging',
    PRODUCTION = 'production',
    SELF_HOSTED = 'self-hosted',
}

export const NODE_ENV: NodeEnv = import.meta.env.VITE_ENVIRONMENT as NodeEnv;

export enum ENVType {
    PRODUCTION = 'production',
    STAGING = 'staging',
    DEVELOPMENT = 'development',
}

export enum AppChannel {
    WEB = 'web',
    MOBILE = 'mobile',
    DESKTOP = 'desktop',
}

export enum HeaderType {
    IDEMPOTENT = 'x-idempotent-key',
}
export enum CookieKeyType {
    XHIT = 'x-hit',
}

export enum PasswordType {
    USERGENERATED = 'user-generated',
    SYSTEMGENERATED = 'system-generated',
    TEMPORARY = 'temporary',
}

export enum CurrencyType {
    NGN = 'NGN',
    USD = 'USD',
}

export const UserEnum = {
    SUPER: 'superadmin',
    ADMIN: 'admin',
    BUSINESS: 'business',
    TALENT: 'talent',
    USER: 'user',
} as const;

export enum PasswordType {
    SELF = 'self',
    GENERATED = 'generated',
    SELF_CHANGED = 'self-changed',
}


export enum UserType {
    SUPER = 'super',
    ADMIN = 'admin',
    BUSINESS = 'business',
    TALENT = 'talent',
    USER = 'user',
}

export enum BusinessType {
    COMPANY = 'company',
    NONPROFIT = 'non-profit',
    GOVERNMENT = 'government',
    EDUCATION = 'education',
    PARTNER = 'partner',
    OTHER = 'other',
}

export enum OtpType {
    REGISTER = 'register',
    LOGIN = 'login',
    GENERIC = 'generic',
    ACTIVATEACCOUNT = 'activate-account',
    CHANGEPASSWORD = 'change-password',
    FORGOTPASSWORD = 'forgot-password',
}
