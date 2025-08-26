'use client';

import { registerUser } from "@/app/actions/auth/registerUser";
import SocialLogin from "@/app/login/components/SocialLogin";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegisterForm = () => {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const payload = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
        };
        // console.log(name, email, password);
        
        toast('Submitting...');
        const result = await registerUser(payload);

       if (result?.success) {
           // ✅ শুধু auto-login এর toast
           const loginResponse = await signIn('credentials', {
               email: payload.email,
               password: payload.password,
               redirect: false,
           });

           if (loginResponse?.ok) {
               toast.success('Registered and logged in successfully!');
               router.push('/'); 
               form.reset();
           } else {
               toast.error('Login failed after register');
           }
       } else {
           toast.error('Registration failed');
       }
        // await registerUser({ name, email, password });
    };
    
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" id="name" />
            </div>

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
                Register
            </button>
            <SocialLogin/>
        </form>
    );
};

export default RegisterForm;
