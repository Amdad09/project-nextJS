'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import SocialLogin from './SocialLogin';
const LoginForm = () => {
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        toast('Submitting ....');
        try {
            const response = await signIn('credentials', {
                email,
                password,
                callbackUrl: '/',
                redirect: false,
            });
            if (response.ok) {
                toast.success('Logged In successfully');
                router.push('/');
                form.reset();
            } else {
                toast.error(response?.error || 'Failed to login');
            }
            //console.log({ email, password });
        } catch (error) {
            console.log(error);
            toast.error('FAILED to Log In');
        }
    };

   
    return (
        <>
            <div className="my-2 text-red-500"></div>
            <form className="login-form" onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <button
                    type="submit"
                    className="btn-primary button w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
                >
                    Login
                </button>
                <SocialLogin />
            </form>
        </>
    );
};

export default LoginForm;
