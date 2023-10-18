import React from 'react';
import Image from 'next/image'

export default function Header() {
    return (
        <header className='fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 lg:px-10 lg:py-6'>
            <Image 
                src='/logo.svg' 
                alt={''}
                width={120}
                height={120}
            />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Latest</li>
            </ul>
        </header>
    )
}