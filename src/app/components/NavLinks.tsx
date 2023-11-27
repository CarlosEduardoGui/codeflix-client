import Link from 'next/link';
import React from 'react';

export const NavLinks = () => (
    <nav>
        <ul className='hidden md:flex md:space-x-4'>
            <Link href='/search?genre=Action'>Action</Link>
            <Link href='/search?genre=Animation'>Animation</Link>
            <Link href='/search?genre=Drama'>Drama</Link>
        </ul>
    </nav>
);
