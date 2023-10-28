'use client'
import { InputField } from '@/app/components/InputField';
import React from 'react'

export default function ForgotPasswordForm() {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert('Please enter your email');
    }
    return (
        <form
            onSubmit={onSubmit}
            className='flex w-full max-w-md rounded flex-col space-y-4 bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'
        >
            <div className='flex flex-col items-center space-y-4'>
                <h1 className='text-3xl font-bold'>
                    Forgot Password
                </h1>
                <p className='text-sm text-gray-500'>
                    Enter your email to reset your password
                </p>
                <InputField
                    id='email'
                    type='email'
                    label='Email'
                    placeholder='Enter your email'
                />
                <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
                    <button
                        className='flex w-full justify-center rounded-lg bg-red-500 hover:bg-red-600 px-4 py-2 text-sm font-semibold text-white sm:w-auto sm:px-8'
                        type='submit'
                    >
                        Reset Password
                    </button>
                </div>
            </div>
        </form>
    )
}
