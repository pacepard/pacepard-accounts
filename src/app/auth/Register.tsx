import { AuthLayout } from '@/components/layouts/auth-layout';
import RegisterForm from '@/components/base/auth/register-form';
import { useNavigate } from 'react-router-dom';
import { RouteURL } from '@/routes/paths';

const Register = () => {
    const navigate = useNavigate();

    return (
        <AuthLayout
            title="Create your Onaeko account"
            // subtitle="Sign up to start using Onaeko"
            description="Already have an account?"
            maxWidth="sm"
            buttonLabel="Sign in"
            onButtonClick={() => navigate(RouteURL.login)}
        >
            <RegisterForm />
        </AuthLayout>
    );
};

export default Register;
