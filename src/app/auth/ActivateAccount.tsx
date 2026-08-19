import { AuthLayout } from '@/components/layouts/auth-layout';
import OtpForm from '@/components/base/auth/otp-form';
import { OtpType } from '@/utils/enums.util';
import storage from '@/services/storage';
import { RouteURL } from '@/routes/paths';

const ActivateAccount = () => {
    const email = storage.getUserEmail() as string;

    return (
        <AuthLayout
            title="Enter activation code"
            description="We sent a 6-digit code to your email address"
            maxWidth="sm"
            showTermsAndPrivacy={false}
        >
            <OtpForm
                email={email}
                otpType={OtpType.ACTIVATEACCOUNT}
                successMessage="Account activated successfully!"
                redirectTo={RouteURL.login}
            />
        </AuthLayout>
    );
};

export default ActivateAccount;
