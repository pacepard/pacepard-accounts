interface TermsAndPrivacyProps {
    authType?: 'signup' | 'signin';
}

export const TermsAndPrivacy = ({
    authType = 'signup',
}: TermsAndPrivacyProps) => {
    const actionText = authType === 'signup' ? 'signing up' : 'signing in';

    return (
        <p className="text-muted-foreground text-start px-6 pt-2 pb-6 text-sm">
            By {actionText}, you agree to the{' '}
            <a href="/terms" className="underline hover:text-foreground">
                Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="underline hover:text-foreground">
                Privacy Policy
            </a>
            .
        </p>
    );
};
