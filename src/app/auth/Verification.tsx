import { AuthLayout } from '@/components/layouts/auth-layout';
import OtpForm from '@/components/base/auth/otp-form';
import { OtpType } from '@/utils/enums.util';
import storage from '@/services/storage';
import { RouteURL } from '@/routes/paths';

const Verification = () => {
    const email = storage.getUserEmail() as string;

    return (
        <AuthLayout
            title="Enter verification code"
            description="We sent a 6-digit code to your email address"
            maxWidth="sm"
            showTermsAndPrivacy={false}
        >
            <OtpForm
                email={email}
                otpType={OtpType.GENERIC}
                successMessage="Verified successfully!"
                redirectTo={RouteURL.onboarding}
            />
        </AuthLayout>
    );
};

export default Verification;
