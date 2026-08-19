import ResetPasswordForm from '@/components/base/auth/reset-password';
import { AuthLayout } from '@/components/layouts/auth-layout';
import { useNavigate } from 'react-router-dom';
import { RouteURL } from '@/routes/paths';

const ResetPassword = () => {
    const navigate = useNavigate();

    return (
        <AuthLayout
            title="Reset your password"
            maxWidth="sm"
            onButtonClick={() => navigate(RouteURL.login)}
            showTermsAndPrivacy={false}
        >
            <ResetPasswordForm />
        </AuthLayout>
    );
};

export default ResetPassword;
