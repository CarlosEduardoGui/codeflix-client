'use client';

import { AuthForm } from '@/app/components/AuthForm';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

type ServerError = {
    message: string
}

export default function LoginForm() {
    const route = useRouter();
    const [errors, setErrors] = useState<string[]>([]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        console.log(errors)
        
        try {
            const response = await fetch('api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                route.push('/');
                return;
            }

            const payload: ServerError[] = await response.json();
            setErrors(payload.map((error) => error.message));

        } catch (error) {
            console.error(error);

            setErrors(['An expected error occorred.'])
        }
    }

    return (
        <AuthForm
            formType='login'
            onSubmit={handleSubmit}
        />
    );
}
