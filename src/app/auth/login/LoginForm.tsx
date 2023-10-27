'use client';

import { AuthForm } from '@/app/components/AuthForm';
import { InputField } from '../../components/InputField';


export default function LoginForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        alert('Login')
        e.preventDefault();
    }

    return (
        <AuthForm 
            formType='login'
            onSubmit={handleSubmit}
        />
    );
}
