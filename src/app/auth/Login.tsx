import { AuthLayout } from '@/components/layouts/auth-layout';
import LoginForm from '@/components/base/auth/login-form';
import { useNavigate } from 'react-router-dom';
import { RouteURL } from '@/routes/paths';

const Login = () => {
    const navigate = useNavigate();

    return (
        <AuthLayout
            title="Login to Onaeko"
            description="Don't have an account?"
            maxWidth="sm"
            authType="signup"
            buttonLabel="Sign up"
            onButtonClick={() => navigate(RouteURL.register)}
        >
            <LoginForm />
        </AuthLayout>
    );
};

export default Login;
