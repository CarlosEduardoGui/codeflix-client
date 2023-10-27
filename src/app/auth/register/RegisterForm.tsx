'use client';

import { AuthForm } from '@/app/components/AuthForm';
import { InputField } from '../../components/InputField';


export default function RegisterForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        alert('Register')
        e.preventDefault();
    }
    return (
        <AuthForm
            formType='register'
            onSubmit={handleSubmit}
        />
    );
}
