import React from 'react';
import Image from 'next/image'

export const UserProfile = () => (
    <div className='flex items-center space-x-4'>
        <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
        <Image
            src='/profile.png'
            alt='Profile'
            width={40}
            height={40}
            className='cursor-pointer rounded' 
        />
    </div>
);
